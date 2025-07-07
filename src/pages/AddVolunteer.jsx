import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from "../provider/useAuth";
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddVolunteer = () => {
    const { user } = useAuth();
    const [startDate, setStartDate] = useState(new Date())
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const category = form.category.value;
        const email = form.email.value;
        const deadline = startDate;
        const location = form.location.value;
        const volunteers = form.volunteers.value;
        const description = form.description.value;
        const postData = { title, thumbnail, category, deadline, location, volunteers, description, admin: { email, name: user?.displayName, photo: user?.photoURL } };
        console.table(postData);

        try {
            axios.post(`${import.meta.env.VITE_API}/add-volunteer`, postData);
            toast.success('Add Post Successful.')
            navigate('/manage-my-post');
        } catch (error) {
            toast.error(error.message);
        }

    }
    return (
        <div className="shadow-xl max-w-lg mx-auto p-5 mt-4 border rounded-md">
            <Helmet>
                <title>Voluntrix | Add Voluntrix</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* title */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium '>
                            Post Title
                        </label>
                        <input
                            name='title'
                            className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300`}
                            type='text'
                            placeholder='Post Title'
                            required
                        />
                    </div>
                    {/* Thumbnail */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium '
                        >
                            Thumbnail
                        </label>
                        <input
                            name='thumbnail'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300'
                            type='text'
                            placeholder='Thumbnail'
                            required
                        />
                    </div>
                    {/* Category */}
                    <div className='mt-4'>
                        <label className=' ' htmlFor='category'>
                            Category
                        </label>
                        <select
                            name='category'
                            id='category'
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
                            className='block mb-2 text-sm font-medium'>Deadline
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
                    {/* location */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium '
                        >
                            Location
                        </label>
                        <input
                            name='location'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300'
                            type='text'
                            placeholder='Location'
                        />
                    </div>
                    {/* No. of volunteers needed */}
                    <div className='mt-4 relative'>
                        <div className='flex justify-between'>
                            <label
                                className='block mb-2 text-sm font-medium '>
                                No. of Volunteers Needed
                            </label>
                        </div>
                        <input
                            name='volunteers'
                            className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-indigo-300`}
                            type='number'
                            placeholder='No. of Volunteers Needed'
                        />
                    </div>
                    {/* Logged in user name */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium '> User Name
                        </label>
                        <input
                            defaultValue={user?.displayName}
                            disabled={true}
                            className={`block text-opacity-70 w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-blue-300`}
                            type='text'
                        />
                    </div>
                    {/* Logged in user email */}
                    <div className='mt-4'>
                        <label
                        className='block mb-2 text-sm font-medium '
                        >
                            User Email
                        </label>
                        <input
                            name="email"
                            defaultValue={user?.email}
                            disabled={true}
                            className='block text-opacity-70 w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-blue-300'
                            type='email'
                            required
                        />
                    </div>
                </div>
                {/* description */}
                <div className='mt-4'>
                    <label
                        className='block mb-2 text-sm font-medium '
                        htmlFor='name'> Description
                    </label>
                    <textarea name="description" className="textarea-bordered textarea block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Description"></textarea>
                </div>

                {/* submit buton */}
                <div className='mt-5'>
                    <button
                        type='submit'
                        className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10'
                    >
                        Add Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddVolunteer;