import axios from "axios";
import { useState, useEffect } from "react";
import MyVolunteerRequestTable from "../components/MyVolunteerRequestTable";
import toast from "react-hot-toast";

const MyVolunteerRequest = () => {
    const [volunteer, setVolunteer] = useState([]);
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
            console.log(data);
        } catch (error) {
            toast.error(error.message)
        }
    }
    const handleCalcleVolunteer = (id) => {
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
    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-gray-800 '>My Volunteer Request</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {volunteer.length} Request
                </span>
            </div>

            <div className='flex flex-col mt-6'>
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
                                        volunteer.length > 0 ? volunteer.map((request) => <MyVolunteerRequestTable key={request?._id} request={request} handleCalcleVolunteer={handleCalcleVolunteer} />) : <tr><td colSpan="6" className='text-sm p-3 font-semibold text-gray-500'>
                                            No Request Found
                                        </td></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyVolunteerRequest;