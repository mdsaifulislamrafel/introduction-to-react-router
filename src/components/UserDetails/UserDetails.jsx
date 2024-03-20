import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const { name } = user;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <h2>User Name: {name}</h2>
            <button className="btn" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;