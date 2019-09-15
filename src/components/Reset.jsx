import React from 'react';
import CategoryIcon from '@material-ui/icons/Category';

class Reset extends React.Component {
    render() {
        const { quiz, onFinish } = this.props;

        return (
            <div className="reset">
                <h3>Results</h3>
                <div className="reset-view">
                    <div className="reset-icon"><CategoryIcon /></div>
                    <h4>Your Score</h4>
                    <p>{quiz.score + ' pts'}</p>
                    <button className="finish-btn" onClick={() => { onFinish(quiz.score) }}>Finish</button>
                </div>
            </div>
        );
    }
}

export default Reset;