const BASE_URL = "/.netlify/functions/tmdb";

export const getPopularMovies = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?query=${encodeURIComponent(query)}`,
  );

  const data = await response.json();

  return data.results;
};
