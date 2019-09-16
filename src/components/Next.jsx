import React from 'react';

class Next extends React.Component {
    render() {
        const { quiz, next } = this.props;

        if (quiz.showNext === true) {
            return (
                <button className="next-btn" onClick={() => next()}>NEXT</button>
            );
        }

        return null;
    }
}

export default Next;