import React from 'react';
import _ from 'lodash';
import Home from './Home';
import Quiz from './Quiz';
import Reset from './Reset';

class ContinentQuiz extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            game: null,
            quiz: {
                questions: [],
                currentQuestion: 1,
                score: 0,
                showScore: false
            },
            highScore: [
                { score: 2000, date: (new Date()) },
                { score: 1500, date: (new Date()) },
                { score: 1000, date: (new Date()) },
            ],
            fetchError: false
        };

        this.loadHighScore();

        fetch('https://api.myjson.com/bins/a6da9')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(() => this.setState({ fetchError: true }));
    }

    loadHighScore() {
        if (localStorage.getItem('highscore')) {
            let appState = localStorage.getItem('highscore');
            let highScore = JSON.parse(appState);
            this.setState({ highScore });
        };
    };

    handleGameStart = () => {
        const game = true;
        this.setState({ game });
    };

    handleGameFinish = (score) => {
        const lastScore = { date: new Date(), score };

        this.setState(state => ({
            game: null,
            questions: [],
            currentQuestion: 1,
            showScore: false,
            score: 0,
            highScore:
                (_.take(
                    _.reverse(
                        _.sortBy([...state.highScore, lastScore], 'score')
                    ), 3
                ))
        }))
    }

    render() {
        const { game, highScore, fetchError, quiz, data } = this.state;

        if (game === null) {
            return (
                <Home
                    highScore={highScore}
                    message={fetchError ? "Couldn't load the data. Sorry!" : null}
                    onGameStart={this.handleGameStart}
                />
            );
        } else if (quiz.showScore === false) {
            return (
                <Quiz
                    game={game}
                    data={data}
                    quiz={quiz}
                />
            );
        } else if (quiz.showScore === true) {
            return (
                <Reset
                    quiz={quiz}
                    onFinish={this.handleGameFinish}
                />
            )
        }
    }
};

export default ContinentQuiz;

// const continents = _.uniq(_.sortBy(_.map(this.state.data, 'continent')));
// const choices = _.sampleSize(continents, 3);
// const correctAnswer = _.random(3);

// const QUESTION_COUNT = 5;
// for (let i = 0; i < QUESTION_COUNT; i++) {

//     this.state.quiz.questions.push({
//         options: choices,
//         correct: correctAnswer,
//         image: _.sample(_.filter(this.state.data, { continent: choices[correctAnswer] })).image
//     });
// }