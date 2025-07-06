import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerPostCard from "../components/VolunteerPostCard";

const AllVolunteerNeedPosts = () => {
    const [volunteer, setVolunteer] = useState([]);
    const [search, setSearch] = useState('');
        useEffect(() => {
            fetchAllData();
        }, [search])
        const fetchAllData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API}/all-volunteer?search=${search}`);
                setVolunteer(data)
            } catch (error) {
                console.log(error);
            }
        }
        console.log(search);
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-30 focus-within:border-gray-400 focus-within:ring-gray-400'>
                    <input
                    onChange={(e) => setSearch(e.target.value)}
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-base-100 outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        placeholder='Enter Job Title'
                        aria-label='Enter Job Title'
                    />

                    <button className='px-3 md:hidden lg:items-center lg:flex md:px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10'>
                        Search
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {
                    volunteer.map((voluntrix) => <VolunteerPostCard key={voluntrix?._id} voluntrix={voluntrix}/>)
                }
            </div>
        </div>
    );
};

export default AllVolunteerNeedPosts;