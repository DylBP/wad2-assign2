export const getMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};


export const getActor = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
    .catch((error) => {
      throw error
    });
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};










// UPDATED CODE

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

export const getMovieCredits = async ( args ) => {
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