import React, {createContext, useContext, useEffect, useState} from 'react';
import {Appearance} from 'react-native';

import {lightTheme, darkTheme} from './colors';

const ThemeContext = createContext();

export function ThemeProvider({children}) {
  const [isLightTheme, setIsLightTheme] = useState(
    Appearance.getColorScheme() === 'dark',
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setIsLightTheme(colorScheme === 'dark');
    });

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setIsLightTheme(prev => !prev);
  };

  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
