import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const QuizSingleData = ({ qdata }) => {
    const { options, question, correctAnswer } = qdata;


    const [data, setData] = useState();

    const handleToAnswer = () => {
        toast(`Correct Answer: ${correctAnswer}`);

    }



    //  

    return (
        <div className='container lg:mx-auto lg:w-6/12 rounded-md bg-slate-500 lg:h-60 lg:mb-5 hover:bg-slate-700'>
                <div className='mt-10 flex justify-end'>
                    <button className='mt-5 pr-4' onClick={handleToAnswer}><FontAwesomeIcon icon={faCoffee} /></button>
                </div>
                
                <div className='mt-4 font-bold text-lg text-justify lg:pl-8 lg:pr-8 p-1'>
                    <h2>Question: {question}</h2>
                    <h1>{data}</h1>
                </div>
                

            <div className=' '>
                <div className=' lg:w-6/12 lg:mx-auto rounded-md text-justify ml-16 sw-11/12 mt-3 pb-6 text-sm'>

                    {
                        options.map(option =>
                            <div>
                                <input type="radio" value={option} name="name" onChange={(e) => setData(e.target.value(option === correctAnswer ? toast('added') : toast('wrong')))} />
                                <b>{option}</b>

                                <ToastContainer />
                            </div>
                        )}

                </div>

            </div>
        </div>
    );
};

export default QuizSingleData;