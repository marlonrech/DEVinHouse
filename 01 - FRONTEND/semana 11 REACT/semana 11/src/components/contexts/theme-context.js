import { useState, createContext, useContext } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
            }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    return useContext(ThemeContext)
}

export {ThemeContextProvider, useTheme};