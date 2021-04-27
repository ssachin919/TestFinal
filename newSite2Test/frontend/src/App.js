import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert, Breadcrumb, Card, Form, Container, Row, Col} from 'react-bootstrap';
import Navigation from './Components/Navigation';
import MovieTable from './Components/MovieTable';
import axios from 'axios';
import MovieAccordion from './Components/MovieAccordion';




function App() {

  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState("");
  const [errBool, setErrBool] = useState(false);
  const [loading, setLoading] = useState(true);
  let URL = `https://api.themoviedb.org/3/movie/popular?api_key=e2803ec5809a44b538456a1a15258e8e&language=en-US&page=1`;
  
  
  const fetchMovies = (url) => {
    axios
    .get(
      url
    )
    .then(response => {
      setMovies(response.data.results);
      setLoading(false);
    })
    .catch(err => {
      setErr(err.message);
      setErrBool(true);
      setLoading(false);
    });
  }
  
  useEffect(() => {
    fetchMovies(URL);
  }, [URL]);


  return (
    <Container fluid>
      <Navigation />
      <MovieTable movies={movies} />
      <MovieAccordion movies={movies} />
    </Container>
  );
}

export default App;
