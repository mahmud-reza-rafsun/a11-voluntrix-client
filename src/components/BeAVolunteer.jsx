import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../provider/useAuth";
import 'react-datepicker/dist/react-datepicker.css';
import { format } from "date-fns";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const BeAVolunteer = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { id } = useParams();
    const [volunteer, setVolunteer] = useState({});
    useEffect(() => {
        fetchAllData();
    }, [])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/volunteer-details/${id}`);
            setVolunteer(data)
        } catch (error) {
            toast.error(error?.message);
        }
    }
    const handleBeAVolunteer = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const category = form.category.value;
        const email = form.email.value;
        const deadline = form.deadline.value;
        const location = form.location.value;
        const volunteers = form.volunteers.value;
        const description = form.description.value;
        const suggestion = form.suggestion.value;
        const volunteerData = { title, thumbnail, category, deadline, location, volunteers, description, suggestion, status: "Requested", admin: { email, name: user?.displayName, photo: user?.photoURL } };

        try {
            await axios.post(`${import.meta.env.VITE_API}/be-a-volunteer`, volunteerData);
            toast.success('Request Add Successful.')
            navigate('/my-volunteer-request')
        } catch (error) {
            toast.error(error?.message);
        }
    }
    return (
        <div className="shadow-xl max-w-lg mx-auto p-5 mt-4 border rounded-md">
            <Helmet>
                <title>Voluntrix | Be a Volunteer</title>
            </Helmet>
            <form onSubmit={handleBeAVolunteer}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* title */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium '>
                            Post Title
                        </label>
                        <input
                            defaultValue={volunteer?.title}
                            name='title'
                            className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10 text-opacity-70 focus:outline-none focus:ring focus:ring-indigo-300`}
                            type='text'
                            disabled={true}
                        />
                    </div>
                    {/* Thumbnail */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium  '
                        >
                            Thumbnail
                        </label>
                        <input
                            defaultValue={volunteer?.thumbnail}
                            name='thumbnail'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10 text-opacity-70 focus:outline-none focus:ring focus:ring-indigo-300'
                            type='text'
                            disabled={true}
                        />
                    </div>
                    {/* Category */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium ' htmlFor='loggingPassword'>
                            Category
                        </label>
                        <input
                            defaultValue={volunteer?.category}
                            name='category'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10 text-opacity-70 focus:outline-none focus:ring focus:ring-indigo-300'
                            type='text'
                            disabled={true}
                        />
                    </div>
                    {/* deadline */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium '>Deadline
                        </label>
                        <input
                            defaultValue={volunteer?.deadline && format(new Date(volunteer?.deadline), 'P')}
                            name='deadline'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10 text-opacity-70 focus:outline-none focus:ring focus:ring-indigo-300'
                            type='text'
                            disabled={true}
                        />
                    </div>
                    {/* location */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium '
                        >
                            Location
                        </label>
                        <input
                            defaultValue={volunteer?.location}
                            name='location'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10 text-opacity-70 focus:outline-none focus:ring focus:ring-indigo-300'
                            type='text'
                            disabled={true}
                        />
                    </div>
                    {/* No. of volunteers needed */}
                    <div className='mt-4 relative'>
                        <div className='flex justify-between'>
                            <label
                                className='block mb-2 text-sm font-medium'>
                                No. of Volunteers Needed
                            </label>
                        </div>
                        <input
                            defaultValue={volunteer?.volunteers}
                            name='volunteers'
                            className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10 text-opacity-70 focus:outline-none focus:ring focus:ring-indigo-300`}
                            type='number'
                            disabled={true}
                        />
                    </div>
                    {/* Logged in user name */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium'> User Name
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
                            className='block mb-2 text-sm font-medium'
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
                        className='block mb-2 text-sm font-medium'
                        htmlFor='name'> Description
                    </label>
                    <textarea defaultValue={volunteer?.description} disabled={true} name="description" className="textarea-bordered textarea block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 text-opacity-70 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Description"></textarea>
                </div>
                {/* Suggestion */}
                <div className='mt-4'>
                    <label
                        className='block mb-2 text-sm font-medium'
                        htmlFor='name'> Suggestion
                    </label>
                    <textarea name="suggestion" className="textarea-bordered textarea block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-400 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Description"></textarea>
                </div>
                {/* status */}
                <div>
                    <p className="text-sm mt-4"><span className="text-sm font-medium text-gray-600">Status</span>: <span className='text-green-500 py-1 px-2 rounded-xl bg-green-100/60'>Requested</span></p>
                </div>
                {/* submit buton */}
                <div className='mt-5'>
                    <button
                        type='submit'
                        className='w-full px-6 py-3 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10'
                    >
                        Request
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BeAVolunteer;