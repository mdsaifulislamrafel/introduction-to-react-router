import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const {id, title, body} = post;
    return (
        <div className="border-2 p-4 bg-green-500 font-semibold">
            <h2>Post Id : {id}</h2>
            <h2>Post Title : {title}</h2>
            <p>Description : {body}</p>
            <Link to={`/post/${id}`}><button className="btn mt-5 btn-primary">Post DEtails</button></Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;