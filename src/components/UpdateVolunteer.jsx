import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from "../provider/useAuth";
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateVolunteer = () => {
    const { user } = useAuth();
    const {id} = useParams();
    const [startDate, setStartDate] = useState(new Date())
    // const navigate = useNavigate();
    const [volunteer, setVolunteer] = useState([]);
    useEffect(() => {
        fetchAllData();
    }, [user])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/update-volunteer/${id}`);
            setVolunteer(data)
        } catch (error) {
            toast.error(error.message);
        }
    }
    console.log(volunteer);

    const handleUpdate = async (e) => {
        // e.preventDefault();

        // try {
        //     const {data} = axios.put(`${import.meta.env.VITE_API}/....`);
        //     toast.success('Add Post Successful.')
        //     // navigate('/');
        //     console.log(data);
        // } catch (error) {
        //     console.log(error);
        //     toast.error(error.message);
        // }

    }
    return (
        <div className="shadow-xl max-w-lg mx-auto p-5 mt-4">
            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* title */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium text-gray-600 '>
                            Post Title
                        </label>
                        <input
                            name='title'
                            className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300`}
                            type='text'
                            placeholder='Post Title'
                            required
                            defaultValue={volunteer?.title}
                        />
                    </div>
                    {/* Category */}
                    <div className='mt-4'>
                        <label className='text-gray-700 ' htmlFor='category'>
                            Category
                        </label>
                        <select
                            name='category'
                            id='category'
                            defaultValue={volunteer.category}
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300 mt-1'>
                            <option value='Healthcare'>Healthcare</option>
                            <option value='Education'>Education</option>
                            <option value='Social Service'>Social Service</option>
                            <option value='Animal Welfare'>Animal Welfare</option>
                        </select>
                    </div>
                    {/* deadline */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium text-gray-600 '>Deadline
                        </label>
                        <div className="">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-indigo-300 pr-10"
                                placeholderText="Pick a deadline"
                            />
                        </div>
                    </div>
                    {/* No. of volunteers needed */}
                    <div className='mt-4 relative'>
                        <div className='flex justify-between'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600'>
                                No. of Volunteers Needed
                            </label>
                        </div>
                        <input
                            name='volunteers'
                            className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-indigo-300`}
                            type='number'
                            placeholder='No. of Volunteers Needed'
                            defaultValue={volunteer?.volunteers}
                        />
                    </div>
                </div>
                {/* description */}
                <div className='mt-4'>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-600 '
                        htmlFor='name'> Description
                    </label>
                    <textarea defaultValue={volunteer?.description} name="description" className="textarea-bordered textarea block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Description"></textarea>
                </div>

                {/* submit buton */}
                <div className='mt-5'>
                    <button
                        type='submit'
                        className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10'
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateVolunteer;