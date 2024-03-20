import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";
import './Header.css'

const Header = () => {
    const navigation = useNavigation();
    return (
        <div>
            <div className="flex justify-center gap-5 p-5">

                <div>
                    <nav className="flex gap-5 mb-10 text-center">
                        <Link to="/">Logo</Link>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/users">Users</NavLink>
                        <NavLink to="/posts">Posts</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                    <div className="text-center">
                        {
                            navigation.state === 'loading' ? <p><span className="loading loading-spinner loading-lg"></span></p> : <Outlet></Outlet>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;