import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CreatePost from '../CreatePost/CreatePost';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ViewGroup = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (localStorage.getItem(`${id}`)) {
            const data = JSON.parse(localStorage.getItem(`${id}`));
            setPosts(data);
        }
    }, [id]);

    return (
        <div>
            <CreatePost id={id} />
            <div className="container d-flex justify-content-center flex-column align-items-center">
                {posts.length>0?posts.map((post, i) => (
                    <div key={i} className="p-5 border my-2 w-75 text-center  ">
                        <span>post number {i + 1}</span>
                        <h2>{post.title}</h2>
                        <p className='px-3'> {post.content}</p>
                    </div>
                )):<h4 className='pb-3'>theris no posts yet</h4>}
            </div>
            <div className='d-flex justify-content-center'>

            <Link to={`/`}> <Button  className=' mx-2' variant="outlined">Back</Button></Link> 
            </div>

        </div>
    );
};

export default ViewGroup;
