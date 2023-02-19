import React, { useState } from 'react';

const QuizSingleData = ({ qdata }) => {
    const { options, question, correctAnswer } = qdata;

   const [data, setData] = useState();

    return (
        <div>
            <h2>Question: {question}</h2>
            <h1>{data}</h1>
            <div>


                <div>
                    <input type="radio" name="one" value="0" onChange={e => setData(e.target.value)}/>{options[0]}
                
               
                    <input type="radio" name="two" value="1" onChange={e => setData(e.target.value)} />{options[1]}
                
                
                    <input type="radio" name="three" value="2" onChange={e => setData(e.target.value)}/>{options[2]}
                
                
                    <input type="radio" name="four" value="3" onChange={e => setData(e.target.value)}/>{options[3]}
                </div>


            </div>
        </div>
    );
};

export default QuizSingleData;