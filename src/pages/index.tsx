import React, { FunctionComponent, useContext } from 'react';
import Head from 'next/head';

import HomeScreen from 'containers/home';

const Home: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Cards with Texts</title>
                <meta name='description' content='Cards with Texts' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <HomeScreen />
        </>
    );
};

export default Home;
