import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

class Answer extends React.Component {
    render() {
        const { quiz, index, i } = this.props;

        console.log(quiz.questions[i].correct)

        if (index === quiz.questions[i].correct && quiz.selected !== null) {
            return (
                <div className="right">
                    <DoneIcon />
                </div>
            );
        } else if (index !== quiz.questions[i].correct && quiz.selected === index) {
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