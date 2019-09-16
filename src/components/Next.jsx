import React from 'react';

class Next extends React.Component {
    render() {
        const { quiz, next, i } = this.props;

        if (quiz.showNext === true) {
            return (
                <button className="next-btn" onClick={() => next(i)}>NEXT</button>
            );
        }

        return null;
    }
}

export default Next;