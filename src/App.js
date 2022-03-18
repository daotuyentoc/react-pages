import './App.css';
import MovieList from './MovieList';
import Background from './Background';
import SwitchTheme from './SwitchTheme';
import { useState } from 'react';

function App() {
  const [darkMode,setDarkMode] = useState(true);
  return (
    <div className={`${darkMode ? 'dark-mode' : ''}`}>
      <Background />
      <SwitchTheme handleSwitchTheme= {setDarkMode}/>
      <MovieList />
    </div>
  );
}

export default App;
