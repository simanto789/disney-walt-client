import { Link } from "react-router-dom";
import logo from '../../../assets/disneylogo1.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";



const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>     
        {user?.email ? 
        <>
        <li><Link to="/mytoys">My Toys</Link></li>
        <li><Link to="/addtoy">Add Toys</Link></li>
        <li> <button onClick={handleLogOut}>LogOut</button> </li>
        </> 
        : <li><Link to="login">Login</Link></li>
        }
        

    </>
    return (
        <div className="navbar bg-base-200 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl w-32 ">
                    <img className="h-7" src={logo} alt="" />
                    <small>DisneyWalt</small>
                    </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/about"><button className="btn btn-outline">About Us</button></Link>

            </div>
        </div>
    );
};

export default NavBar;