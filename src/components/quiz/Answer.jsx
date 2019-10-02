import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

const Answer = (props) => {
    const { quiz, index } = props;

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

export default Answer;