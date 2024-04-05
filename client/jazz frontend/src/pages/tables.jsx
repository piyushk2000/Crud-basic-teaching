import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import axios from 'axios';

const NotesTable = ({ setNoteToEdit }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await axios.get('http://localhost:3000/api/notes');
            console.log('API response:', response.data);  // Add this line
            setNotes(response.data);
        };
        fetchNotes();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/api/notes/${id}`);
        setNotes(notes.filter((note) => note._id !== id));
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Creator</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notes?.map((note) => (
                        <TableRow key={note._id}>
                            <TableCell>{note.title}</TableCell>
                            <TableCell>{note.creator}</TableCell>
                            <TableCell>
                                <Button onClick={() => setNoteToEdit(note)}>Edit</Button>
                                <Button onClick={() => handleDelete(note._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default NotesTable;
