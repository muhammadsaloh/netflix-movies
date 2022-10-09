import React, { useEffect, useState } from 'react';
import { Container, Link, Box, Typography } from '@mui/material';
import { useGenres, useGetMovies, useSearcMovies } from '../../services/queries';
import {
  List,
  Item,
  CategoryList,
  StyledTypography,
  ActiveTypography,
  SearchInput
} from '../../styles/styles';

const Movies = () => {
  const [category, setCategory] = useState(28);
  const [searchQuery, setSearchQuery] = useState();
  const movies = useGetMovies();
  const genres = useGenres();
  const searchMutation = useSearcMovies();
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    if (searchQuery !== undefined) {
      searchMutation.mutate(searchQuery);
    }
  }, [searchQuery]);

  const inputHandleChange = (element) => {
    const handler = setTimeout(() => {
      setSearchQuery(element.target.value);
    }, 250);

    return () => clearTimeout(handler);
  };

  return (
    <div>
      <Container maxWidth={'lg'}>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <Box>
            <SearchInput
              onInput={inputHandleChange}
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
          </Box>
        </Box>
        {genres.isLoading ? (
          <Typography variant="h2" component="h2" color="red">
            Loading...
          </Typography>
        ) : (
          <CategoryList>
            {genres?.data?.genres.slice(0, 7).map((genre) =>
              category === genre.id ? (
                <ActiveTypography
                  onClick={() => setCategory(genre.id)}
                  key={genre.id}
                  variant="h4"
                  component="h2">
                  {genre.name}
                </ActiveTypography>
              ) : (
                <StyledTypography
                  onClick={() => setCategory(genre.id)}
                  key={genre.id}
                  variant="h4"
                  component="h2">
                  {genre.name}
                </StyledTypography>
              )
            )}
          </CategoryList>
        )}
        <Box component="div">
          {searchQuery ? (
            <List>
              {searchMutation.isLoading ? (
                <Typography variant="h2" component="h2" color="red">
                  Loading...
                </Typography>
              ) : searchMutation.data?.results.length ? (
                searchMutation.data?.results.map((movie) =>
                  movie.genre_ids.map(
                    (id) =>
                      category === id && (
                        <Item key={movie.id}>
                          <Link href={`/movies/${movie.id}`}>
                            <img
                              src={imageBaseUrl + movie.poster_path}
                              alt={movie.original_title}
                            />
                          </Link>
                        </Item>
                      )
                  )
                )
              ) : (
                <Typography variant="h2" component="h2" color="red">
                  Not Found
                </Typography>
              )}
            </List>
          ) : (
            <List>
              {movies.isLoading ? (
                <Typography variant="h2" component="h2" color="red">
                  Loading...
                </Typography>
              ) : (
                movies.data?.results.map((movie) =>
                  movie.genre_ids.map(
                    (id) =>
                      category === id && (
                        <Item key={movie.id}>
                          <Link href={`/movies/${movie.id}`}>
                            <img
                              src={imageBaseUrl + movie.poster_path}
                              alt={movie.original_title}
                            />
                          </Link>
                        </Item>
                      )
                  )
                )
              )}
            </List>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Movies;
