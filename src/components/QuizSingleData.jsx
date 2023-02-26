import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const QuizSingleData = ({ qdata, score, setScore, handleToQuiz }) => {
    const { options, question, correctAnswer } = qdata;

console.log(qdata);
    const [showFinalResult, setFinalResult] = useState(false)
    // const [score, setScore] = useState(0)
    const [data, setData] = useState(0);
    console.log(data)



    const handleToAnswer = () => {
        toast(`Correct Answer: ${correctAnswer}`);

    }




     

    return (
        
            <div className='container lg:mx-auto lg:w-9/12 rounded-md mt-4  bg-slate-500 lg:h-96 lg:mb-5 mb-6'>
                
                <div className=' flex justify-end'>
                    <button className='mt-5 pr-4' onClick={handleToAnswer}><FontAwesomeIcon icon={faCoffee} /></button>
                </div>
                
                <div className='mt-4 font-bold text-sm text-justify lg:pl-8 lg:pr-8 p-1'>
                <h2><p className='text-lg'>Question:</p> {question}</h2>
                    
                </div>
                

                {showFinalResult ? 
                <div> 
                    <h1>Final Result</h1>
                    <h2>1 out of 8 - (20%)</h2>
                    <button>Restart</button>
                </div>
                : 
                
                
                
            
                
                <div className='lg:w-6/12 lg:mx-auto text-justify ml-16 w-9/12 text-sm h-56'>

                    <ul>
                    {
                        options.map(option => 
                            <div key={option}>
                                {/* <input  type="radio" value={option} name="name"  onClick={()=>handleToQuiz((option === correctAnswer ? toast('Write Answer'): toast('wrong Answer')))} /> */}
                                {/* <input  type="radio" value={option} name="name"  onChange={(e)=>setData(e.target.value) (option === correctAnswer ? toast('Write Answer'): toast('wrong Answer'))} /> */}
                                <li className='border-solid border-o  rounded-md lg:mt-2  p-2 mb-2  bg-red-400 hover:bg-red-600'
                                
                                    onClick={()=>handleToQuiz(option === correctAnswer ? toast('Correct Answer') : toast('Wrong Answer') (score + 1))}>{option}</li>
                                
                               
                            </div>
                        )}
                    </ul>
                 
                </div>
                 
            }
           <ToastContainer />
        </div>
        
    );
};

export default QuizSingleData;

// onChange={(e) => setData(e.target.value)}