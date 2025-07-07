import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerPostCard from "./VolunteerPostCard";
import toast from "react-hot-toast";

const VounteerPost = () => {
    const [volunteer, setVolunteer] = useState([]);
    useEffect(() => {
        fetchAllData();
    }, [])
    const fetchAllData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/volunteer`);
            setVolunteer(data)
        } catch (error) {
            toast.error(error);
        }
    }
    return (
        <div>
            <div className="text-center py-4 lg:py-7">
                <h2 className="font-semibold text-xl lg:text-3xl">All voluteer need posts </h2>
                <p className="font-light text-gray-500 max-w-4xl mx-auto mt-2">website where users can view all the available volunteer opportunity posts. Each post typically includes details like the title, description, location, date, and how many volunteers are needed. Logged-in users can also choose to become a volunteer for any post from this page.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 lg:mt-5">
                {
                    volunteer.map((voluntrix) => <VolunteerPostCard key={voluntrix._id} voluntrix={voluntrix} />)
                }
            </div>
        </div>
    );
};

export default VounteerPost;