import React from 'react';
import Options from './Options';

class Question extends React.Component {
    render() {
        const { i, quiz, clickHandler, next } = this.props;
        const picture = quiz.questions[i].image;

        return (
            <div className="question">
                <div className="image" style={{ backgroundImage: `url(${picture})` }}></div>
                <Options quiz={quiz} i={i} clickHandler={clickHandler} next={next} />
            </div>
        );
    }
}

export default Question;