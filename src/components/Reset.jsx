import React from 'react';
import CategoryIcon from '@material-ui/icons/Category';

class Reset extends React.Component {
    render() {
        return (
            <div className="reset">
                <h3>Results</h3>
                <div className="reset-view">
                    <div className="reset-icon"><CategoryIcon /></div>
                    <h4>Your Score</h4>
                    <p>2,500pts</p>
                    <button className="finish-btn">Finish</button>
                </div>
            </div>
        );
    }
}

export default Reset;