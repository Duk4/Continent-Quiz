import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

class Answer extends React.Component {
    render() {
        const { quiz, index } = this.props;

        console.log(quiz.questions[quiz.turn].correct);

        if (index === quiz.questions[quiz.turn].correct && quiz.selected !== null) {
            return (
                <div className="right">
                    <DoneIcon />
                </div>
            );
        } else if (index !== quiz.questions[quiz.turn].correct && quiz.selected === index) {
            return (
                <div className="wrong">
                    <ClearIcon />
                </div>
            );
        }

        return null;
    }
}

export default Answer;