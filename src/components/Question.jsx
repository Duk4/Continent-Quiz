import React from 'react';
import Option from './Option';

class Question extends React.Component {
    render() {
        return (
            <div className="question">
                <div className="image"></div>
                <Option />
            </div>
        );
    }
}

export default Question;