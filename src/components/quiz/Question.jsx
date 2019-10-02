import React from 'react';
import Options from './Options';

const Question = (props) => {
    const { quiz, clickHandler, next } = props;

    const picture = quiz.questions[quiz.turn].image;

    return (
        <div className="question">
            <div className="image" style={{ backgroundImage: `url(${picture})` }}></div>
            <Options quiz={quiz} clickHandler={clickHandler} next={next} />
        </div>
    );
}

export default Question;