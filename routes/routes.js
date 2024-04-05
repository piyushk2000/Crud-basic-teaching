// routes.js
import express from 'express';
import { createNote,updateNote , getNote,deleteNote , getAllNotes} from '../controller/controller.js'

const router = express.Router();

router.post('/note', createNote);
router.get('/notes/:id', getNote);
router.get('/notes', getAllNotes);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);
// router.get('/', getAllNotes);



export default router;
