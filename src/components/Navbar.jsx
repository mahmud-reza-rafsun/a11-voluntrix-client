import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png'
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Sign Out Successfull');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-volunteer-need-posts'>All Volunteer Need Posts</NavLink></li>
    </>
    return (
        <div className='shadow-lg sticky top-0 z-50 backdrop-blur-xl'>
            <div className="navbar max-w-6xl mx-auto px-5 lg:px-0">
                <div className="navbar-start">
                    <Link to="/" className='flex justify-center items-center gap-4'>
                        <img className='w-7' src={logo} alt='' />
                        <span className="font-bold text-xl">Voluntrix</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-3 items-center">
                        <div className="mt-1">
                            {/* dark toggle */}
                            <DarkModeToggle />
                        </div>
                        <div>
                            {
                                user ?
                                    <div className="flex items-center mr-3 gap-3">
                                        <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={user?.displayName}>
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        alt={user?.name}
                                                        src={user?.photoURL} />
                                                </div>
                                            </div>
                                            <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                                {
                                                    user && <>
                                                        <li><Link to="/add-volunteer">Add Volunteer need Post</Link></li>
                                                        <li><Link to="/manage-my-post">Manage My Posts</Link></li>
                                                        <li><Link to="/my-volunteer-request">My Volunteer Request</Link></li>
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                        <div className="hidden lg:flex">
                                            <button
                                                onClick={handleSignOut}
                                                className="px-4 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-gray-300 font-semibold focus:ring-opacity-10">Log Out</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="hidden lg:flex">
                                        <Link to="/login" className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10">Login</Link>
                                    </div>
                            }
                        </div>
                    </div>
                    {/* menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="px-3 py-2 text-sm font-medium bg-indigo-200 rounded-lg lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-indigo-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content absolute right-0 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                            <div className="mt-2 pb-2">
                                {
                                    user ? <div className="">
                                        <button
                                            onClick={handleSignOut}
                                            className="px-4 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-gray-300 font-semibold focus:ring-opacity-10">Log Out</button>
                                    </div> : <div>
                                        <Link to="/login" className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10">Login</Link>
                                    </div>
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Navbar;