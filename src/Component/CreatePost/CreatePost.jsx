import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

// CreatePost component receives an 'id' prop
const CreatePost = ({ id }) => {
    // Declare state variables for title and content
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission behavior

        // Check if there are already posts stored in localStorage under the given id
        if (localStorage.getItem(`${id}`)) {
            // Retrieve existing posts, parse them from JSON
            const posts = JSON.parse(localStorage.getItem(`${id}`));
            // Add new post to the existing posts array
            posts.push({ title, content });
            // Update localStorage with the new posts array
            localStorage.setItem(`${id}`, JSON.stringify(posts));
            console.log({ title, content });
        } else {
            // If no posts exist, create a new array with the current post and store it in localStorage
            localStorage.setItem(`${id}`, JSON.stringify([{ title, content }]));
            console.log({ title, content });
        }
    }

    // Render the form for creating a new post
    return (
        <div className='container py-5'>
            <form onSubmit={handleSubmit} className='d-flex justify-content-center py-3'>
                <TextField 
                    onChange={(e) => setTitle(e.target.value)} 
                    className='mx-2' 
                    label="Title" 
                    variant="outlined" 
                />
                <TextField 
                    onChange={(e) => setContent(e.target.value)} 
                    className='mx-2' 
                    label="Content" 
                    variant="outlined" 
                />
                <Button type='submit' className='mx-2' variant="outlined">Create Post</Button>
            </form>
        </div>
    );
}

export default CreatePost;
