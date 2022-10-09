import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Spinner from './components/Spinner/spinner';

const Movies = lazy(() => import('./pages/movies/movies'));
const Movie = lazy(() => import('./pages/movie/movie'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Movie />} />

          <Route path="*" element={<h1>Not found Page 404</h1>} />

          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
