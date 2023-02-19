import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const QuizContext = createContext();

const Root = () => {

        const quizs = useLoaderData();
    

    return (
        <QuizContext.Provider value={quizs}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizContext.Provider>
    );
};

export default Root;