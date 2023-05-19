import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../contexts/AuthProvider';


const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(result => { })
            .catch(error => console.error(error))
    }

    const navItems = <>
        <NavLink className={({ isActive }) => (isActive ? 'text-blue-700' : '')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-blue-700' : '')} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-blue-700' : '')} to="/all-toys">All Toys</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-blue-700' : '')} to="/my-toys">My Toys</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-blue-700' : '')} to="/add-toy">Add A Toy</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-blue-700' : '')} to="/blogs">Blogs</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'text-blue-700' : '')} to="/contact">Contact</NavLink>
    </>

    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' ><img className='w-10' src={logo} alt="" /></Link>
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600"> JS ToyHub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold text-gray-500 flex gap-5 items-center">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex items-center space-x-2">
                {user && <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={user.displayName}>
                    <label tabIndex={0} className=" btn-circle">
                        <img className='rounded-full w-10' src={user.photoURL} alt="user" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
                        <li>
                            <a className="justify-between">
                                <h3>{user.displayName}</h3>
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button onClick={handleLogout} className='btn btn-ghost text-purple-700 font-semibold rounded-lg '>Logout</button></li>
                    </ul>
                </div>}

                {user ?
                    <button onClick={handleLogout} className='px-5 py-2 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-700 '>Logout</button> :
                    <Link to='/login'><button className='px-5 py-2 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-700'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;