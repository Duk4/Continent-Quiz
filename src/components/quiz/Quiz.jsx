import React from 'react';
import Question from './Question';

const Quiz = (props) => {
    const { quiz, data, clickHandler, next } = props;

    return (
        <div className="quiz">
            <h3>Question {quiz.turn + 1} of 5</h3>
            <Question data={data} quiz={quiz} clickHandler={clickHandler} next={next} />
        </div>
    );
}

export default Quiz;