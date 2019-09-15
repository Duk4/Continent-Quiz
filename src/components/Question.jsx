import React from 'react';
import Option from './Option';

class Question extends React.Component {
    render() {
        const { data, quiz } = this.props;



        return (
            <div className="question">
                <div className="image"></div>
                <Option quiz={quiz} />
            </div>
        );
    }
}

export default Question;