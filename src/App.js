import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css';

import Home from './components/Home';
import Todo from './pages/todo/Todo';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/todo' element={<Todo />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
