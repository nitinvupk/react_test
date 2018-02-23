function selectMovie(movie) {
  return {
    type: 'SELECTED_MOVIE',
    payload: movie
  }
}

function addMovie() {
  const newMovie = { title: '', description: '', director: ''}

  return {
    type: 'ADD_MOVIE',
    payload: new_movie
  }
}

export { selectMovie, addMovie }