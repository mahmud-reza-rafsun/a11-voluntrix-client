import { useEffect, useState } from "react";
import useAuth from "../provider/useAuth";
import axios from "axios";
import ManageMyPostTable from "../components/ManageMyPostTable";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { FaThList, FaTh } from 'react-icons/fa';
import ManageMyPostCard from "../components/ManageMyPostCard";

const ManageMyPost = () => {
    const { user } = useAuth();
    const [volunteer, setVolunteer] = useState([]);
    const [view, setView] = useState('table');
    useEffect(() => {
        fetchAllData();
    }, [user])
    const fetchAllData = async () => {
        if (user?.email) {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API}/volunteer/${user?.email}`);
                setVolunteer(data)
            } catch (error) {
                toast.error(error.message);
            }
        }
    }
    // handleDelete
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API}/delete-volunteer/${id}`);
            toast.success('Delete Post');
            fetchAllData();
        } catch (error) {
            toast.error(error.message);
        }
    }
    // handle delete volunteer
    const handleDeleteVolunteer = (id) => {
        toast((d) => (
            <div className="text-center space-y-2">
                <div>
                    <p>Are you <b>Sure</b> !!!</p>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => {
                        toast.dismiss(d.id)
                        handleDelete(id)
                    }}
                        className="btn-sm bg-red-400 text-white font-semibold rounded-md">Delete
                    </button>
                    <button onClick={() => toast.dismiss(d.id)}
                        className="btn-sm bg-indigo-400 text-white font-semibold rounded-md"> Close
                    </button>
                </div>
            </div>
        ))
    }
    const toggleView = () => {
        setView(view === 'table' ? 'grid' : 'table')
    }
    return (
        <section className='container px-4 mx-auto pt-4 lg:pt-12'>
            <Helmet>
                <title>Voluntrix | Manage My Post</title>
            </Helmet>
            <div className="flex justify-between items-center">
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium'>Manage My Post</h2>

                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                        {volunteer.length} Post
                    </span>
                </div>
                <div>
                    <button onClick={toggleView} className="mb-4 p-2  bg-blue-600 text-white rounded flex items-center gap-2">
                        {view === 'table' ? <FaThList /> : <FaTh />}
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
                                                <button className='flex items-center gap-x-2'>
                                                    <span>No of Volunteer</span>
                                                </button>
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
                                            volunteer.length > 0 ? volunteer.map((volutrix) => <ManageMyPostTable key={volutrix?._id} volutrix={volutrix} handleDeleteVolunteer={handleDeleteVolunteer} />) : <tr><td colSpan="6" className='text-sm p-3 font-semibold text-gray-500'>
                                                No Post Found
                                            </td></tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
                        {/* load dynamic data */}
                        {
                            volunteer.length > 0 ? volunteer.map((card) => <ManageMyPostCard key={card?._id} card={card} handleDeleteVolunteer={handleDeleteVolunteer} />) : <tr><td colSpan="6" className='text-sm p-3 font-semibold text-gray-500'>
                                No Post Found
                            </td></tr>
                        }
                    </div>
                )
            }
        </section>
    );
};

export default ManageMyPost;