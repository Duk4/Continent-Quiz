import React from 'react';
import Question from './Question';

class Quiz extends React.Component {
    render() {
        const { quiz, game, onFinish, data } = this.props;
        const next = () => {

        };

        return (
            <div className="quiz">
                <h3>Question {quiz.currentQuestion} of 5</h3>
                <Question data={data} quiz={quiz} />
                <button className="next-btn" onClick={next}>NEXT</button>
            </div>
        );
    }
}

export default Quiz;