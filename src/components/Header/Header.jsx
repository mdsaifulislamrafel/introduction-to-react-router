import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="flex justify-center gap-5 p-5">

                <div>
                    <nav className="flex gap-5 mb-10 text-center">
                        <Link to="/">Logo</Link>
                        <Link to="/home">Home</Link>
                        <Link to="/users">Users</Link>
                        <Link to="/posts">Posts</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Header;