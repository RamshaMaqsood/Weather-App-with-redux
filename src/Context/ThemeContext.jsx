import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev); // Toggle function
    console.log('isDarkMode:', isDarkMode);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => {
    const context = useContext(ThemeContext);
    console.log('Context value:', context); // Add this line
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

