import React from 'react';
import Header from '../../components/Header';
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import Heading from "../../components/Heading";

import s from './Home.module.scss';



const HomePage = () => {
    return (
        <div className={s.root}>
            <Header/>
            <Layout className={s.contextWrap}>
                <div className={s.contextText}>
                    <Heading level={1}>
                        <b>Find</b> all your
                        favorite <b>Pokemon</b>
                    </Heading>
                    <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                    <Button
                        buttonSize={'normal'}
                        buttonColor={'green'}
                        onClick={() => console.log('Click Button')}>
                        {'See Pokemons'}
                    </Button>
                </div>
                <Parallax/>
            </Layout>
        </div>
    );
};

export default HomePage;
