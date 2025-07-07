import { Link } from "react-router-dom";

const VolunteerPostCard = ({ voluntrix }) => {
    const { _id, title, thumbnail, category, deadline, location, volunteers, description } = voluntrix || {};
    return (
        <div className="p-4 rounded-lg border">
            <figure>
                <img
                    src={thumbnail}
                    className="h-44 w-full object-cover rounded-md"
                    alt="Shoes" />
            </figure>
            <div className="space-y-1 mt-8">
                <h2 className="font-semibold">{title}</h2>
                <p className="font-normal text-sm">Category: {category}</p>
                <p className="font-normal text-sm">Deadline: {deadline}</p>
                <p className="font-normal text-sm">Location: {location}</p>
                <p className="font-normal text-sm">Volunteers: {volunteers}</p>
                <hr />
                <p className="font-normal text-sm">Description: {description.substring(0, 98)}...</p>
                {/* details buton */}
                <div className=''>
                    <Link to={`/details/${_id}`}>
                        <button
                            type='submit'
                            className='mt-2 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10'
                        >
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default VolunteerPostCard;