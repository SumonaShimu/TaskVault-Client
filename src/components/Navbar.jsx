import { Link } from "react-router-dom";

const Navbar = () => {
    const listitems = <>
        <li><Link to='/' className="btn btn-ghost text-lg">Home</Link></li>
        <li><Link to='/alltasks' className="btn btn-ghost text-lg">All Tasks</Link></li>
    </>
    return (
        <div className="navbar bg-base-300 text-base-content py-5 px-16 text-blue-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {listitems}
                    </ul>
                </div>
                <div className="h-16 flex items-center">
                    <img src="https://raw.githubusercontent.com/SumonaShimu/images/main/1.png" className="object-contain h-16" />
                    <p className="btn btn-ghost normal-case text-3xl font-bold"><span className="">Task<span className="text-blue-700 m-0">Vault</span></span></p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {listitems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary">Login</a>
            </div>
        </div>
    );
};

export default Navbar;