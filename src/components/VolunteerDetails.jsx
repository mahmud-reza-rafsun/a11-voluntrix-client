import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const VolunteerDetails = () => {
    const { id } = useParams();
    const [volunteer, setVolunteer] = useState([]);
    useEffect(() => {
        fetchAllData();
    }, [])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/volunteer-details/${id}`);
            setVolunteer(data)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(volunteer);
    return (
        <div
            className="hero min-h-[80vh]"
            style={{
                backgroundImage: `url(${volunteer?.thumbnail})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <div className="space-y-1 text-white">
                        <h2 className="font-semibold text-2xl">{volunteer?.title}</h2>
                        <p className="font-normal text-md">Category: {volunteer?.category}</p>
                        <p className="font-normal text-md">Deadline: {volunteer?.deadline}</p>
                        <p className="font-normal text-md">Location: {volunteer?.location}</p>
                        <p className="font-normal text-md">Volunteers: {volunteer?.volunteers}</p>
                        <hr />
                        <p className="font-normal text-md">Description: {volunteer?.description}...</p>
                        {/* details buton */}
                        <div className=''>
                            <Link to={`/be-a-volunteer/${volunteer?._id}`}>
                                <button
                                    type='submit'
                                    className='mt-2 px-5 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10'
                                >
                                    Be a Volunteer
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDetails;