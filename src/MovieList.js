import List from './List';
function MovieList() {
  return (
    <div className='section-movie-list'>
      <div className='container'>
        <List movieName='dragon ball' />
        <List movieName='naruto' />
        <List movieName='conan' />
      </div>
    </div>
  );
}
export default MovieList