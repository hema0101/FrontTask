import React, { useState } from 'react';
import { TextField,Button } from '@mui/material';

const CreateGroub = () => {
   
 
    
   
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
 
        // addPost({ title, content });
        if(localStorage.getItem('groups') ){
            console.log(1);
       const groups= JSON.parse(localStorage.getItem('groups'))
    //    console.log(groups);
            groups.push({id:Date.now(),name,description,createdAt: new Date().toLocaleString()})
            localStorage.setItem('groups', JSON.stringify(groups))
  console.log(groups);
        }
        else{
            console.log(2);
            localStorage.setItem('groups', JSON.stringify([{id:Date.now(),name,description,createdAt: new Date().toLocaleString()}]))
        }


      };
     
    return (
        <>
        <div className="container my-3 d-flex  justify-content-center ">
       

         <form onSubmit={handleSubmit} className="my-3 d-flex  justify-content-center " >

         

                    <TextField  onChange={(e) => setName(e.target.value)}  className='mx-2'  label="name" variant="outlined" />
                
            

            <TextField  onChange={(e) => setDescription(e.target.value)}  className='mx-2' label="description" variant="outlined" />
            
            
       
        


            <Button type='submit' className='mx-2' variant="outlined">Create Group</Button>

        </form>  
        </div>
        
        </>
    );
}

export default CreateGroub;
