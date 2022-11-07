import React, { FunctionComponent } from 'react';

import useGetCards from 'api/Cards/getCards';

import Card from './components/Card';

import styles from './Home.module.scss';

const HomeScreen: FunctionComponent = () => {
    const { data, error } = useGetCards();

    const renderCards = () => {
        if (!data) {
            return (
                <p>
                    Loading...
                </p>
            );
        }

        if (error) {
            return (
                <p>
                    {error.message}
                </p>
            );
        }

        const { cards } = data;

        return (
            <>
                {cards.map(card => {
                    const { avatarId, title, desc } = card;

                    return (
                        <Card
                            key={avatarId}
                            avatarId={avatarId}
                            title={title}
                            desc={desc}
                        />
                    );
                })}
            </>
        );
    };

    return (
        <div className={styles['main-container']}>
            {renderCards()}
        </div>
    );
};

export default HomeScreen;
