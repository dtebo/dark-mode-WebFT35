import useLocalStorage from './useLocalStorage';
import usePrefersDarkMode from './usePrefersDarkMode';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("dark-mode-enabled");

    const prefersDarkMode = usePrefersDarkMode();

    const enabled =
        typeof darkMode !== 'undefined' ? darkMode : prefersDarkMode;

    return [enabled, setDarkMode];
};

export default useDarkMode;