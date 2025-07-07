import axios from "axios";
import { useState, useEffect } from "react";
import MyVolunteerRequestTable from "../components/MyVolunteerRequestTable";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { FaThList, FaTh } from 'react-icons/fa';
import MyVolunteerReqCard from "../components/MyVolunteerReqCard";

const MyVolunteerRequest = () => {
    const [volunteer, setVolunteer] = useState([]);
    const [view, setView] = useState('table')
    useEffect(() => {
        fetchAllData();
    }, [])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/be-a-volunteer`);
            setVolunteer(data)
        } catch (error) {
            toast.error(error.message);
        }
    }

    // handleCalcleVolunteer
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API}/delete-my-volunteer/${id}`);
            toast.success('Calcle Successful.')
            fetchAllData();
        } catch (error) {
            toast.error(error.message)
        }
    }
    const handleCancelVolunteer = (id) => {
        toast((d) => (
            <div>
                <div className="text-center">
                    <p>Are You <b>Sure!!!</b></p>
                </div>
                <div className="flex gap-4 mt-2">
                    <button onClick={() => {
                        toast.dismiss(d.id)
                        handleDelete(id)
                    }}
                        className="btn-sm px-4 bg-red-400 text-white font-semibold rounded-md">Ok
                    </button>
                    <button onClick={() => toast.dismiss(d.id)}
                        className="btn-sm bg-indigo-400 text-white font-semibold rounded-md"> Close
                    </button>
                </div>
            </div>
        ))
    }
    const toggleView = () => {
        setView(view === 'table' ? 'grid' : 'table');
    }
    return (
        <section className='container px-4 mx-auto pt-4 lg:pt-12'>
            <Helmet>
                <title>Voluntrix | My Volunteer Request</title>
            </Helmet>
            <div className='flex justify-between items-center gap-x-3'>
                <div className="flex flex-col lg:flex-row items-center gap-x-3">
                    <h2 className='text-lg font-medium'>My Volunteer Request</h2>

                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                        {volunteer.length} Request
                    </span>
                </div>
                <div className="mt-4">
                    <button onClick={toggleView} className="mb-4 p-2  bg-blue-600 text-white rounded flex items-center gap-2">
                        {view === 'table' ? <FaThList />:  <FaTh />}
                    </button>
                </div>
            </div>

            {
                view === 'table' ? (<div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Title</span>
                                                </div>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <span>Deadline</span>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Category
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Description
                                            </th>

                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                        {/* load dynamic data */}
                                        {
                                            volunteer.length > 0 ? volunteer.map((request) => <MyVolunteerRequestTable key={request?._id} request={request} handleCancelVolunteer={handleCancelVolunteer} />) : <tr><td colSpan="6" className='text-sm p-3 font-semibold text-gray-500'>
                                                No Request Found
                                            </td></tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                        {/* load dynamic data */}
                        {
                            volunteer.length > 0 ? volunteer.map((card) => <MyVolunteerReqCard key={card?._id} card={card} handleCancelVolunteer={handleCancelVolunteer} />) : <tr><td colSpan="6" className='text-sm p-3 font-semibold text-gray-500'>
                                No Request Found
                            </td></tr>
                        }
                    </div>
                )
            }

        </section>
    );
};

export default MyVolunteerRequest;