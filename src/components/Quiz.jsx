import React from 'react';
import _ from 'lodash';
import Question from './Question';

class Quiz extends React.Component {
    render() {
        const { quiz, data } = this.props;

        const QUESTION_COUNT = 5;

        for (let i = 0; i < QUESTION_COUNT; i++) {
            const continents = _.uniq(_.sortBy(_.map(data, 'continent')));
            const choices = _.sampleSize(continents, 3);
            const correctAnswer = _.random(2);

            quiz.questions.push({
                options: choices,
                correct: correctAnswer,
                image: _.sample(_.filter(data, { continent: choices[correctAnswer] })).image
            });

            return (
                <div className="quiz">
                    <h3>Question {i + 1} of 5</h3>
                    <Question data={data} quiz={quiz} i={i} />
                    <button className="next-btn" onClick={next}>NEXT</button>
                </div>
            );
        };

        const next = () => {

        };
    }
}

export default Quiz;