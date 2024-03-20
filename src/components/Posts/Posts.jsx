
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
const Posts = () => {
    const post = useLoaderData();
    return (
        <div>
            <h1>Post {post.length}</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    post.map((post) => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;