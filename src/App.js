import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
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
