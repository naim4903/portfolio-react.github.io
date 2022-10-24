import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css';

import Home from './components/Home';
import Todo from './pages/todo/Todo';
import Contact from './pages/contact/Contact';
import Movie from './pages/movies/Movie';
import MovieDetails from './pages/movies/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/todo' element={<Todo />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/movies' element={<Movie />} />
        <Route path='/movies/movie-details/:imdbId' element={<MovieDetails />} />

      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
