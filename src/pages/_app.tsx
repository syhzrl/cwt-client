import React from 'react';
import type { AppProps } from 'next/app';

import ThemeProvider from 'context/ThemeContext';

import 'globals.scss';
import NavBar from 'components/NavBar';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <ThemeProvider>
            <NavBar />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
