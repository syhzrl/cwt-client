import React, { createContext, useState, FunctionComponent, useMemo } from 'react';

interface ThemeState {
    theme: string;
    setTheme: (theme: string) => void;
}

const initialState: ThemeState = {
    theme: 'light',
    setTheme: () => null,
};

export const ThemeContext = createContext<ThemeState>(initialState);

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = (props: ThemeProviderProps) => {
    const { children } = props;

    const [theme, setTheme] = useState(initialState.theme);

    const memoValue: ThemeState = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

    return (
        <ThemeContext.Provider value={memoValue}>
            <div className={`theme--${theme}`}>
                <div className='themed-container'>
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
