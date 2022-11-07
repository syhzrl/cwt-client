import React, { FunctionComponent, useState, useEffect } from 'react';
import Image from 'next/image';

import { coloursArray } from 'lib/Variables';

import styles from './Card.module.scss';

interface CardProps {
    avatarId: string;
    title: string;
    desc: string;
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
    const { avatarId, title, desc } = props;

    const [selectedBgColor, setSelectedBgColor] = useState('');

    useEffect(() => {
        setSelectedBgColor(coloursArray[Math.floor(Math.random() * coloursArray.length)]);
    }, []);

    return (
        <div className={styles[`card--${selectedBgColor}`]}>
            <div className={styles['avatar-container']}>
                <Image
                    src={`https://avatars.dicebear.com/api/big-smile/${avatarId}.svg`}
                    alt='avatar'
                    height={100}
                    width={100}
                />
            </div>

            <div className={styles['texts-container']}>
                <p className={styles['card-title']}>
                    {title}
                </p>

                <p className={styles['card-desc']}>
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default Card;
