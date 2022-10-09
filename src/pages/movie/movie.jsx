import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetMovie, useGetMovieRecommendations } from '../../services/queries';
import { List, Item } from '../../styles/styles';

const Movie = () => {
  const { movieId } = useParams();
  const movie = useGetMovie(movieId);
  const recommendations = useGetMovieRecommendations(movieId);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/';

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {movie.isLoading ? (
        <Typography variant="h2" component="h2" color="red">
          Loading...
        </Typography>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ marginRight: 4 }}>
            <Typography variant="h4" component="h1" sx={{ color: 'white' }}>
              {movie.data?.original_title}
            </Typography>
            <Typography variant="h6" component="h4" sx={{ color: 'white' }}>
              {movie.data?.tagline}
            </Typography>
            <Typography variant="p" component="p" sx={{ color: 'white', marginTop: 2 }}>
              {movie.data?.overview}
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <Typography sx={{ color: 'red' }}>
                {movie.data?.release_date.split('-')[0]}
              </Typography>
            </Box>
          </Box>
          <img
            src={imageBaseUrl + 'w500' + movie.data?.backdrop_path}
            alt={movie.data?.original_title}
            loading="lazy"
          />
        </Box>
      )}
      {recommendations.isLoading ? (
        <Typography variant="h2" component="h2" color="red">
          Loading...
        </Typography>
      ) : (
        <div>
          <Typography variant="h4" component="h1" sx={{ color: 'white' }}>
            Recommendations
          </Typography>
          <List>
            {recommendations.data?.results.map((movie) => (
              <Item key={movie.id}>
                <Link href={movie.id}>
                  <img
                    src={imageBaseUrl + 'w200' + movie.poster_path}
                    alt={movie.original_title}
                    loading="lazy"
                  />
                </Link>
              </Item>
            ))}
          </List>
        </div>
      )}
    </Container>
  );
};

export default Movie;
