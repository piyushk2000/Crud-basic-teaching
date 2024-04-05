import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import FormPropsTextFields from './pages/Form';
import NotesTable from './pages/tables'
import NoteForm from './pages/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<NotesTable />} />
        <Route path="/" element={<NotesTable />} index />
        <Route path="/create" element={<NoteForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
