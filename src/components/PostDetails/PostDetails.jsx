import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const details = useLoaderData();
    const {title, body} = details;
    return (
        <div className="border-2 w-[40%] p-5 bg-yellow-300 font-bold">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;