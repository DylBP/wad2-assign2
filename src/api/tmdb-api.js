export const getMovie = async (args) => {
  try {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getActor = async (args) => {
  try {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/actor/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovies = async (args) => {
  try {
    const [, idPart] = args.queryKey;
    const { page } = idPart;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/discover?page=${page}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovieCredits = async (args) => {
  try {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movie/credits/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovieImages = async (args) => {
  try {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movieimages/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/moviereviews/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'),
      }
    }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMoviesAlt = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getUpcomingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem('token'),
    }
  }
  )
  return response.json();
}

export const getTopRatedMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/toprated', {
    headers: {
      'Authorization': window.localStorage.getItem('token'),
    }
  }
  )
  return response.json();
}

export const getCurrentMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/current', {
    headers: {
      'Authorization': window.localStorage.getItem('token'),
    }
  }
  )
  return response.json();
}

export const getGenres = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/genres', {
    headers: {
      'Authorization': window.localStorage.getItem('token'),
    }
  }
  )
  return response.json();
}

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};