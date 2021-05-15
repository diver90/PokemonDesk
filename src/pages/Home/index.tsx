import React from 'react';
import Header from '../../components/Header';
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";

import s from './Home.module.scss';


const HomePage = () => {
    return (
        <div className={s.root}>
            <Header/>
            <Layout className={s.contextWrap}>
                <div className={s.contextText}>
                    <h1>
                        <b>Find</b> all your favorite <b>Pokemon</b>
                    </h1>
                    <p>You can choose</p>
                    <Button onClick={() => console.log('Click Button')}>
                        See Pokemons
                    </Button>
                </div>
                <Parallax/>
            </Layout>
        </div>
    );
};

export default HomePage;
