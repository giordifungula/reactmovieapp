import React from 'react';

const App = () => {
  console.log('API key:', process.env.REACT_APP_TMDB_API_KEY);
  return (
    <div>
      <h1>Movie App</h1>
    </div>
  )
}
// https://api.themoviedb.org/4/discover/movie?api_key=0f2c82ec760ad57df11397848d9ff375&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=10f2c82ec760ad57df11397848d9ff375
export default App;