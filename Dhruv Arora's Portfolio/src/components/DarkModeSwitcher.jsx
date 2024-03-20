import React, { useEffect, useState } from 'react';
import lightMode from '../assets/light-mode.svg';
import darkMode from '../assets/dark-mode.svg';

const DarkModeSwitcher = () => {
  const [theme, setTheme] = useState('dark');

  const calculateSettingAsThemeString = ({
    localStorageTheme,
    systemSettingDark,
  }) => {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }

    if (systemSettingDark.matches) {
      return 'dark';
    }

    return 'light';
  };
  const localStorageTheme = localStorage.getItem('theme');
  const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    setTheme(
      calculateSettingAsThemeString({
        localStorageTheme,
        systemSettingDark,
      })
    );
    if (theme === 'light') {
      document.querySelector('html').classList.remove('dark');
    } else {
      document.querySelector('html').classList.add('dark');
    }
  }, [localStorageTheme, systemSettingDark, theme]);

  const onClickHandler = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.querySelector('html').classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div>
      <button
        className='rounded-full bg-gray-400 bg-opacity-40 p-2'
        onClick={onClickHandler}
      >
        <img
          src={theme === 'light' ? darkMode : lightMode}
          className='h-6 w-6'
        ></img>
      </button>
    </div>
  );
};

export default DarkModeSwitcher;
