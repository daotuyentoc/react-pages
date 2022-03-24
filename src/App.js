import './App.css';
import MovieList from './MovieList';
import Background from './Background';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleTheme = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className={`${darkMode ? 'dark-mode' : ''}`}>
      <Background />
      <div className='container'>
        <div className='swich-theme'>
          <button onClick={handleTheme}
          >Switch theme</button>
        </div>
      </div>
      <MovieList />
    </div>
  );
}

export default App;
