import { Link, NavLink } from "react-router"
import UserDropdown from "./home/UserDropdown"
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { user } = useAuth();
    return (
        <div className="navbar bg-slate-200">
            <div className="navbar-start">
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
                        className="menu menu-sm dropdown-content bg-green-300 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contect-us'>ContactUs</NavLink></li>
                    </ul>
                </div>
                <div className="">
                <Link to="/"><img className="lg:h-[4rem]" src="https://i.ibb.co.com/rc5SHkH/675d146aed27c4000dd0b7de.png" /></Link>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-lg  font-semibold">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contect-us'>ContactUs</NavLink></li>
                </ul>
            </div>

            {/* userDAta*/}
            { user ? (
                <div className="navbar-end ">
                    <UserDropdown/>
                </div>
            )
            :            <div className="navbar-end">
            <div className="flex gap-3 items-center ">
                <Link to="/sign-up"><button className="btn  bg-green-500 hover:bg-slate-800 text-white border-none text-base  font-semibold">SignUp</button></Link>
                <Link to="/sign-in"><button className="btn  bg-green-500 hover:bg-slate-800 text-white border-none text-base font-semibold">SignIn</button></Link>
            </div>
        </div>
        
        }
        </div>
    )
}

export default Navbar