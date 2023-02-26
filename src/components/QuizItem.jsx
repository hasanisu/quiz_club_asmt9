import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import {useLoaderData} from 'react-router-dom';
import QuizSingleData from './QuizSingleData';

const QuizItem = () => {
    const quizItem = useLoaderData();
    const quizData = quizItem.data.questions;
    console.log(quizData[0].correctAnswer)
    const [score, setScore] = useState(0)

    const handleToQuiz =(correctAnswer)=>{
       if(correctAnswer){
        setScore(score + 1)
       }
          

        
       
        // else{
        //     setFinalResult(true);
        // }
        
    }
    return (
        <div className='lg:flex'>
            <div className='m-2 basis-3/4'>
            {
                quizData.map(qdata => <QuizSingleData
                key={qdata.id}
                qdata={qdata}
                score={score}
                setScore={setScore}
                handleToQuiz={handleToQuiz}
                ></QuizSingleData>)
            }
        </div>
        <div className='basis-1/4 bg-red-300 sticky '>
            <h2 className='sticky mt-20 top-28 text-4xl bold underline '>This is cart</h2>
            <p className='sticky top-36 p-6 text-2xl'>Current Score: {score}</p>
        </div>
        </div>
    );
};

export default QuizItem;