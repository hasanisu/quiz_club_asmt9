import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const QuizSingleData = ({ qdata }) => {
    const { options, question, correctAnswer } = qdata;


   const [data, setData] = useState();

    const handleToAnswer=()=>{
        toast(`Correct Answer: ${correctAnswer}`);
        
    }
   


//  

    return (
        <div>
            <h2>Question: {question}</h2>
            <h1>{data}</h1>
            <div>
            

                <div className=' bg-orange-600 w-6/12 mx-auto  rounded-md mb-11'>
                <button onClick={handleToAnswer}><FontAwesomeIcon icon={faCoffee} /></button>
                    {
                    options.map(option =>
                    <div>
                        <input type="radio" value={option} name="name" onChange={(e)=> setData(e.target.value(option === correctAnswer ? toast('added') : toast('wrong') ))} />
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