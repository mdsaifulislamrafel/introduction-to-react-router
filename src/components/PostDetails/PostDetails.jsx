import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const details = useLoaderData();
    const {title, body} = details;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className="border-2 w-[40%] p-5 bg-yellow-300 font-bold space-y-5">
            <h1>{title}</h1>
            <p>{body}</p>
            <button className="btn btn-accent" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;