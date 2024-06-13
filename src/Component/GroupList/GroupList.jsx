import React, { useEffect, useState } from 'react';
import "./groupList.css";
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';


// GroupList component
const GroupList = () => {
    // State variables for groups, editing group id, and edit values
    const [groups, setGroups] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editValues, setEditValues] = useState({ name: '', description: '' });
    
    // useEffect hook to load groups from localStorage on component mount
    useEffect(() => {
        if (localStorage.getItem('groups')) {
            const storedGroups = JSON.parse(localStorage.getItem('groups'));
            setGroups(storedGroups);
        }
    }, []);

    // Function to delete a group by its id using slice method
    function deleteByIdUsingSlice(id) {
        const index = groups.findIndex(item => item.id === id);
        setGroups([...groups.slice(0, index), ...groups.slice(index + 1)]);
        localStorage.removeItem(`${id}`)
        localStorage.setItem('groups', JSON.stringify(groups));
    }

    // Function to handle edit button click
    function handleEditClick(group) {
        setEditingId(group.id);
        setEditValues({ name: group.name, description: group.description });
    }

    // Function to handle save button click
    function handleSaveClick(id) {
        const updatedGroups = groups.map(group => 
            group.id === id ? { ...group, ...editValues } : group
        );
        setGroups(updatedGroups);
        setEditingId(null);
        localStorage.setItem('groups', JSON.stringify(updatedGroups));
    }

    // Function to handle input change in text fields
    function handleInputChange(e) {
        const { name, value } = e.target;
        setEditValues({ ...editValues, [name]: value });
    }

    // Render the table with group information
    return (
        <table border="1" role="table">
            <thead role="rowgroup">
                <tr role="row">
                    <th role="columnheader">ID</th>
                    <th role="columnheader">Name</th>
                    <th role="columnheader">Description</th>
                    <th role="columnheader">Created At</th>
                    <th role="columnheader">Edit</th>
                    <th role="columnheader">Delete</th>
                    <th role="columnheader">View</th>
                </tr>
            </thead>
            <tbody role="rowgroup">
                {groups.map((group) => (
                    <tr role="row" key={group.id}>
                        <td role="cell">{group.id}</td>
                        <td role="cell">
                            {editingId === group.id ? (
                                <TextField
                                    name="name"
                                    value={editValues.name}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                group.name
                            )}
                        </td>
                        <td role="cell">
                            {editingId === group.id ? (
                                <TextField
                                    name="description"
                                    value={editValues.description}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                group.description
                            )}
                        </td>
                        <td role="cell">{group.createdAt}</td>
                        <td role="cell">
                            {editingId === group.id ? (
                                <Button onClick={() => handleSaveClick(group.id)} className='mx-2' variant="outlined">Save</Button>
                            ) : (
                                <Button onClick={() => handleEditClick(group)} className='mx-2' variant="outlined">Edit</Button>
                            )}
                        </td>
                        <td role="cell">
                            <Button onClick={() => deleteByIdUsingSlice(group.id)} className='mx-2' variant="outlined">Delete</Button>
                        </td>
                        <td role="cell">
                            <Link to={`/${group.id}`}> 
                                <Button className='mx-2' variant="outlined">View</Button>
                            </Link> 
                        </td>
                    </tr>
                ))}



            </tbody>
        </table>
    );
}

export default GroupList;
