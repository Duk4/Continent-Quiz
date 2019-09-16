import React from 'react';
import Question from './Question';

class Quiz extends React.Component {
    render() {
        const { quiz, data, clickHandler, next } = this.props;

        return (
            <div className="quiz">
                <h3>Question {quiz.turn + 1} of 5</h3>
                <Question data={data} quiz={quiz} clickHandler={clickHandler} next={next} />
            </div>
        );
    }
}

export default Quiz;