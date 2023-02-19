import React from 'react';
import {useLoaderData} from 'react-router-dom';
import QuizSingleData from './QuizSingleData';

const QuizItem = () => {
    const quizItem = useLoaderData();
    const quizData = quizItem.data.questions;
    console.log(quizData)
    return (
        <div>
            {
                quizData.map(qdata => <QuizSingleData
                key={qdata.id}
                qdata={qdata}
                ></QuizSingleData>)
            }
        </div>
    );
};

export default QuizItem;