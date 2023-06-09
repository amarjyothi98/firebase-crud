import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {

  const [userId, setUserId] = useState("");  

  const getUserIdHandler = (id) => {
    console.log("the id of the document to be edited: ", id)
    setUserId(id); 
  }

  console.log(userId); 

  return (
    <>
      <Router>
        <Header/>
        <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/' element={<Home getUserId={getUserIdHandler}/>} />
          <Route path='/add' element={<AddEdit/>} />
          <Route path='/edit/:id' element={<AddEdit/>} />
          <Route path='/view/:id' element={<View/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
