import useReactSwitchTheme from 'react-switch-theme';
import { FaSun, FaMoon } from 'react-icons/fa';

const colors = {
  light: {
    background: '#fff',
    color: '#333',
    colorhover: '#ff7600',
  },
  dark: {
    background: '#111',
    color: '#fff',
    colorhover: '#ff7600'
  },
};

const themeOptions = {
  colors,
  activeMode: 'dark',
  offlineStorageKey: 'react-random-key',
};

function SwitchTheme() {
  const [theme, setDiffTheme] = useReactSwitchTheme(themeOptions);

  return (
    <div className='switch-theme'>
      <div className='button-wrapper'>
        <div className="button" onClick={() => setDiffTheme()}>
          <span className='text'>Change theme</span>
          <span className="icon">
            {localStorage.getItem('react-random-key') === 'dark' ? <FaMoon /> : <FaSun />}
          </span>
        </div>
      </div>
    </div>
  );
}
export default SwitchTheme;
