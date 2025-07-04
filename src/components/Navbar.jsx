import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png'

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/cvolunteer'>All volunteer Need posts</NavLink></li>
        <li><NavLink to='need-post'>Need posts</NavLink></li>
    </>
    return (
        <div className='bg-base-100 shadow-lg sticky top-0 z-50'>
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
                    <Link className="btn" to="/login">Login</Link>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;