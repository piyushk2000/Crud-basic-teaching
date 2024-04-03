import {Notes} from '../models/model.js'


// const getAllNotes = async(req,res) =>{
//     res.status(201).json({ message: 'here are all you notes' });
// }

const createNote =async(req,res) =>{
    const {title , creator} = req.body
    const newNote = new Notes({title , creator})
    const createNote = await newNote.save();

    res.status(201).json({ note: createNote });
}


// Read operation
const getNote = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Notes.findById(id);
        res.status(200).json(note);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update operation
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, creator } = req.body;
    try {
        const updatedNote = await Notes.findByIdAndUpdate(id, { title, creator }, { new: true });
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Delete operation
const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        await Notes.findByIdAndDelete(id);
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};




export {createNote ,updateNote , getNote, deleteNote}