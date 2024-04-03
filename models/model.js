import mongoose from 'mongoose';

const note = new mongoose.Schema({
    title:String,
    creator:String,
})

const Notes = mongoose.model('note',note) 

export {Notes}