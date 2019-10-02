import React from 'react';

const Next = (props) => {
        const { quiz, next } = props;

        if (quiz.showNext === true) {
            return (
                <button className="next-btn" onClick={() => next()}>NEXT</button>
            );
        }

        return null;
}

export default Next;