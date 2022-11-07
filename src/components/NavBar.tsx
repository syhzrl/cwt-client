import React, { FunctionComponent, useState, useEffect } from 'react';

import styles from './NavBar.module.scss';

const NavBar: FunctionComponent = () => {
    return (
        <div className={styles['main-container']}>
            Cards with Texts
        </div>
    );
};

export default NavBar;
