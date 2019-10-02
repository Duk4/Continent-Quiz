import React from 'react';
import numeral from 'numeral';
import CategoryIcon from '@material-ui/icons/Category';

const Reset = (props) => {
    const { quiz, onFinish } = props;

    return (
        <div className="reset">
            <h3>Results</h3>
            <div className="reset-view">
                <div className="reset-icon"><CategoryIcon /></div>
                <h4>Your Score</h4>
                <p>{numeral(quiz.score).format('0,0') + ' pts'}</p>
                <button className="finish-btn" onClick={() => { onFinish(quiz.score) }}>Finish</button>
            </div>
        </div>
    );
}

export default Reset;