import React, {useState} from 'react';
import QuestionBank from "./N02ClassesAndObjects.json";


function N02ClassesAndObjects() {
    
    const [Bank, setBank] = useState(QuestionBank);

return (
    <div>
        <h3>02-Classes-And-Objects</h3>
        {Bank.map((object, index) =>{
            return (
                <div>
                    <h4>Question nº Question {index}</h4>
                    <p>{object.question}</p>
                    <details>
                        <summary>Answer nº {index}</summary>
                        <p>{object.answer}</p>
                    </details>
                </div>
                    )
        })}
        
    </div>
)

} 




export default N02ClassesAndObjects;