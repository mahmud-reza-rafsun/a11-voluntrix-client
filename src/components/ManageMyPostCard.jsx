import { Link } from "react-router-dom";

const ManageMyPostCard = ({ card, handleDeleteVolunteer }) => {
    const { _id, title, category, deadline, thumbnail, description } = card || {};
    return (
        <div className="p-4 border rounded-md">
            <figure>
                <img
                    src={thumbnail}
                    className="rounded-md border h-44 w-full object-cover"
                    alt="Shoes" />
            </figure>
            <div className="mt-6">
                <div className="space-y-1">
                    <h1 className="font-semibold text-xl">{title}</h1>
                    <div className="font-normal text-sm">Category: {category}</div>
                    <div className="font-normal text-sm">Deadline: {deadline}</div>
                    <div className="font-normal text-sm">Description: {description.substring(0, 25)}...</div>
                </div>
                <div className="card-actions justify-between mt-6">
                    <button onClick={() => handleDeleteVolunteer(_id)} className="flex gap-2 justify-between items-center border-red-400 bg-red-400 hover:bg-red-500 transition-colors duration-500  text-white px-3 py-2 rounded-md">
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                            />
                        </svg>
                    </button>

                    <Link
                        to={`/update-volunteer/${_id}`}
                        className='transition-colors duration-200 px-3 py-2 text-white rounded-md bg-green-400 hover:bg-green-500 focus:outline-none'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                            />
                        </svg>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ManageMyPostCard;