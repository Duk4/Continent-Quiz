import React from 'react';
import Question from './Question';

class Quiz extends React.Component {
    render() {
        return (
            <div className="quiz">
                <h3>Question 1 of 5</h3>
                <Question />
                <button className="next-btn">NEXT</button>
            </div>
        );
    }
}

export default Quiz;