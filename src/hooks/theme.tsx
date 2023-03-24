import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    }
}

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProviderHook = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ITheme>(() => {
      const savedTheme = localStorage.getItem('@minha-carteira:theme');
  
      if (savedTheme) {
        return JSON.parse(savedTheme)
      } else {
        return dark
      }
    });

    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(light);
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(light));
        } else {
            setTheme(dark);
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(dark));
        }
    };
    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
          {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}

export { ThemeProviderHook, useTheme };