import React from 'react';
import Option from './Option';
import Next from './Next';

const Options = (props) => {
    const { quiz, clickHandler, next } = props;
    const options = quiz.questions[quiz.turn].options;

    return (
        <div>
            {
                options.map((option, index) =>
                    <Option option={option} key={index} index={index} quiz={quiz} clickHandler={clickHandler} />
                )
            }

            <Next quiz={quiz} next={next} />
        </div>
    );
}

export default Options;