import React from 'react';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }
    const menu = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/allinventories'>INVENTORY</Link></li>

        <li><Link to="/manageInventory">MANAGE ITEM</Link></li>
        {/* { user && <li><Link to="/addItem">ADD NEW ITEM</Link></li>}
        { user && <li><Link to="/useritem">MY ITEM</Link></li>} */}
        <li><Link to="/blogs">BLOG</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>

        {!user && <li><Link to="/login">LOGIN</Link></li>}
        {!user && <li><Link to="/signup">SIGNUP</Link></li>}

    </>
    return (
        <div>
            <div className='navbar font-bold text-red-300' id='navHeader'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-start menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <img height={40} width={40} src="https://i.ibb.co/wcjSQ6c/chilly1.webp" alt="" />
                    <Link to='/' className='text-2xl'>SPICE TASTE</Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>

                <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>

                {user &&
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">2</span>
                                </div>
                            </label>
                            <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">2 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {user ?
                                     user.photoURL ? <img height={30} width={30} className='rounded-full' src={user?.photoURL} alt="" /> : <div class="avatar online placeholder">
                                       <img height={30} width={30} className='rounded-full' src="https://i.ibb.co/48vFpdg/avatar.png" alt="" />
                                     </div>
                                    : <Link to='/login'>Sign</Link>}

                                </div>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-800 rounded-box w-52">
                                <li>
                                    <button className='btn bg-red-900'>
                                        <h2>
                                            {user?.displayName ? user.displayName : 'User name'}
                                            </h2>
                                    </button>
                                </li>
                                <li>
                                    <Link to='/addItem'><button className='btn bg-red-900 w-full'>ADD ITEM</button></Link>
                                </li>
                                <li>
                                    <Link to='/addBlog'><button className='btn bg-red-900 w-full'>ADD BLOG</button></Link>
                                </li>
                                <li>
                                    <Link to='/useritem'><button className='btn btn-red-900 w-full'>MY ITEM</button></Link>
                                </li>
                                <li>
                                    <button className='btn bg-red-900' onClick={logout}>Logout</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                }
</div>
            </div>
        </div>
    );
};

export default Header;
