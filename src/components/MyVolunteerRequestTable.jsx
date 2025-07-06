import { format } from "date-fns";

const MyVolunteerRequestTable = ({ request, handleCalcleVolunteer }) => {
    const { _id, title, category, description, deadline, volunteers } = request || {};
    return (
        <tr>
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {title}
            </td>

            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {deadline && format(new Date(deadline), 'P')}
            </td>

            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div className='flex items-center gap-x-2'>
                    <p
                        className={`px-3 py-1  ${category === 'Healthcare' && 'text-blue-500 bg-blue-100/60'}
                                    ${category === 'Education' && 'text-green-500 bg-green-100/60'}
                                    ${category === 'Social Service' && 'text-red-500 bg-red-100/60'}
                                    ${category === 'Animal Welfare' && 'text-indigo-500 bg-indigo-100/60'}
                                    text-xs  rounded-full`}>
                        {category}</p>
                </div>
            </td>
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {description.substring(0, 30)} ...
            </td>
            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div className='flex items-center justify-between'>
                    <button onClick={() => handleCalcleVolunteer(_id)} className="flex gap-2 justify-between items-center border-red-400 bg-red-400 hover:bg-red-500 transition-colors duration-500  text-white px-3 py-2 rounded-md">
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
                        <p className="font-semibold">Cancle</p>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MyVolunteerRequestTable;