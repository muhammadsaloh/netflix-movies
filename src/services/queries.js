import { useQuery, useMutation } from 'react-query';
import { request, API_KEY } from './api';

export const useGetMovies = () =>
  useQuery('movies', () =>
    request.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => res.data)
  );

export const useSearcMovies = () =>
  useMutation((query) =>
    request
      .get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`)
      .then((res) => res.data)
  );

export const useGenres = () =>
  useQuery('genres', () =>
    request.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`).then((res) => res.data)
  );

export const useGetMovie = (movieId) =>
  useQuery('movie', () =>
    request.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`).then((res) => res.data)
  );

export const useGetMovieRecommendations = (movieId) =>
  useQuery('recommendations', () =>
    request
      .get(`movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.data)
  );
