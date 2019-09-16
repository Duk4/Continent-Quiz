import React from 'react';
import Option from './Option';
import Next from './Next';

class Options extends React.Component {
    render() {
        const { i, quiz, clickHandler, next } = this.props;
        const options = quiz.questions[i].options;

        return (
            <div>
                {
                    options.map((option, index) =>
                        <Option option={option} key={index} index={index} quiz={quiz} clickHandler={clickHandler} i={i} />
                    )
                }

                <Next quiz={quiz} next={next} i={i} />
            </div>
        );
    }
}

export default Options;