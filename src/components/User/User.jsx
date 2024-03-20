import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
            <div className=" text-xl p-10 border-2 rounded-lg">
                <h2>{name}</h2>
                <p>email: {email}</p>
                <p>phone: {phone}</p>
                <Link to={`/user/${id}`}><button className="btn btn-secondary mt-5">User Details</button></Link>
            </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User;