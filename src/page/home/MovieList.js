import List from './List';
function MovieList() {
  const movies = [
    {
      url: 'top/anime',
      name: 'Top Anime'
    },
    {
      url: 'top/manga',
      name: 'Top Manga'
    }
  ]
  return (
    <div className='section-movie-list'>
      <div className='container'>
        {movies.map((movie, index) => (
          <List movieName={movie} key={index} />
        ))}
      </div>
    </div>
  );
}
export default MovieList