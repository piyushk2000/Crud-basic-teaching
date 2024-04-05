import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

const NoteForm = ({ noteToEdit, setNoteToEdit }) => {
    const [title, setTitle] = useState('');
    const [creator, setCreator] = useState('');

    useEffect(() => {
        if (noteToEdit) {
            setTitle(noteToEdit.title);
            setCreator(noteToEdit.creator);
        }
    }, [noteToEdit]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (noteToEdit) {
            const response = await axios.put(`http://localhost:3000/api/notes/${noteToEdit._id}`, { title, creator });
            console.log(response.data);
        } else {
            const response = await axios.post('http://localhost:3000/api/note', { title, creator });
            console.log(response.data);
        }
        // setNoteToEdit(null);
        setTitle('');
        setCreator('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                label="Creator"
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default NoteForm;
