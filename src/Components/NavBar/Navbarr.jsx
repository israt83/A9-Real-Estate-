// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";


// const Navbarr = () => {
//     const [dropdownVisible, setDropdownVisible] = useState(false);
//     const { logout, user } = useAuth();

//     const toggleDropdown = () => {
//         setDropdownVisible(!dropdownVisible);
//     };
//     const navLinks = <>
//         <li><NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '}  to="/">HOME</NavLink></li>
        
//         <li><NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '} to="/about"> ABOUT</NavLink></li>
//         <li><NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '}  to="/contact">CONTACT US</NavLink></li>
//         <li><NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '}  to="/blog"> BLOG</NavLink></li>

//     </>

//     const { logout, user } = useAuth();
//     console.log(user);
//     return (
//         <div className="container mx-auto navbar bg-base-100">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                             {navLinks}
//                         </ul>
//                     </div>
                   
//                     <img className="w-40 h-28" src="https://i.pinimg.com/564x/a0/7f/37/a07f377de42aa19446ee98154326322b.jpg" alt="" />
                  
                   
                    
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                       {navLinks}
//                     </ul>
//                 </div>



//                 <div className="navbar-end">

//                     {
//                         user? <div className="dropdown dropdown-end">
//                             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                                 <div className="w-10 rounded-full">
//                                     <img src={user?.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg" } />
//                                 </div>
//                             </label>
//                             <ul tabIndex={0} className="menu menu-sm  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                                 <li>
//                                     <button className="btn btn-sm  btn-ghost">{user?.displayName||'user name not found'}</button>

//                                 </li>
//                                 <li>
//                                     <button
//                                         onClick={logout}
//                                         className="btn btn-sm  btn-ghost ">Logout</button>

//                                 </li>
//                             </ul>
//                         </div>
//                             :
//                             <Link to='/login'>
                             
//                                 <button type="button" className="px-5 py-3 font-semibold rounded dark:bg-blue-950 dark:text-gray-100">LOG IN</button>
//                             </Link>
//                     }
//                 </div>
//             </div>
//     );
// };

// export default Navbarr;
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbarr = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { logout, user } = useAuth();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    const navLinks = (
        <>
            <li>
                <NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '}   to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '}   to="/about">ABOUT</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '}  to="/contact">CONTACT US</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive? 'text-blue-900 px-5 py-2 font-bold border rounded border-blue-900 mr-4' :'font-semibold '}   to="/blog">BLOG</NavLink>
            </li>
        </>
    );

    return (
        <div className="container mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown" onClick={toggleDropdown}>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${dropdownVisible ? 'block' : 'hidden'}`} onClick={closeDropdown}>
                        {navLinks}
                    </ul>
                </div>
                <img className="w-40 h-28" src="https://i.pinimg.com/564x/a0/7f/37/a07f377de42aa19446ee98154326322b.jpg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end" onClick={toggleDropdown}>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg"} alt="User Avatar" />
                            </div>
                        </label>
                        <ul className={`menu menu-sm mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${dropdownVisible ? 'block' : 'hidden'}`} onClick={closeDropdown}>
                            <li>
                                <button className="btn btn-sm btn-ghost">{user.displayName || 'User Name Not Found'}</button>
                            </li>
                            <li>
                                <button onClick={logout} className="btn btn-sm btn-ghost">Logout</button>
                            </li>
                            <li>
                                <Link to='/updateProfile'>
                                <button  className="btn btn-sm btn-ghost">UpdateProfile</button>

                                </Link>
                            </li>

                        </ul>
                    </div>
                ) : (
                    <Link to='/login'>
                        <button type="button" className="px-5 py-3 font-semibold rounded dark:bg-blue-950 dark:text-gray-100">LOG IN</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbarr;
