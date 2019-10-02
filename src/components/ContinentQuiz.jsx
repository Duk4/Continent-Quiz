import React from 'react';
import _ from 'lodash';
import Home from './home/Home';
import Quiz from './quiz/Quiz';
import Reset from './finish/Reset';

class ContinentQuiz extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            game: null,
            quiz: {
                questions: [],
                turn: 0,
                score: 0,
                selected: null,
                clickable: true,
                showNext: false,
                showScore: false
            },
            highScore: [],
            fetchError: false
        };

        const highScoreStr = localStorage.getItem('highscore');
        try {
            if (highScoreStr) this.state.highScore = JSON.parse(highScoreStr);
        } catch (e) {
            this.state.highScore = []
        }

        fetch('https://api.myjson.com/bins/a6da9')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(() => this.setState({ fetchError: true }));
    }

    clickHandler = index => {
        this.setState({
            quiz: {
                ...this.state.quiz,
                selected: index,
                clickable: false,
                showNext: true
            }
        });
    };

    next = () => {
        let add;

        if (this.state.quiz.selected === this.state.quiz.questions[this.state.quiz.turn].correct) {
            add = this.state.quiz.score + 750;
        } else {
            add = this.state.quiz.score;
        }

        let turn = this.state.quiz.turn + 1;

        if (this.state.quiz.turn < 4) {
            this.setState({
                quiz: {
                    ...this.state.quiz,
                    turn: turn,
                    score: add,
                    selected: null,
                    clickable: true,
                    showNext: false
                }
            });
        } else {
            this.setState({
                quiz: {
                    ...this.state.quiz,
                    score: add,
                    selected: null,
                    clickable: true,
                    showNext: false,
                    showScore: true
                }
            });
        }
    };

    handleGameStart = () => {
        const game = true;
        this.setState({ game });

        const QUESTION_COUNT = 5;

        for (let i = 0; i < QUESTION_COUNT; i++) {
            const continents = _.uniq(_.sortBy(_.map(this.state.data, 'continent')));
            const choices = _.sampleSize(continents, 3);
            const correctAnswer = _.random(2);

            this.state.quiz.questions.push({
                options: choices,
                correct: correctAnswer,
                image: _.sample(_.filter(this.state.data, { continent: choices[correctAnswer] })).image
            });
        };
    };

    handleGameFinish = (score) => {
        const lastScore = { date: new Date(), score };
        const highScore = _.take(_.reverse(_.sortBy([...this.state.highScore, lastScore], 'score')), 3);

        this.setState({
            game: null,
            quiz: {
                questions: [],
                turn: 0,
                score: 0,
                selected: null,
                clickable: true,
                showNext: false,
                showScore: false
            },
            highScore
        })

        let appState = JSON.stringify(highScore);
        localStorage.setItem('highscore', appState);
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
                    clickHandler={this.clickHandler}
                    next={this.next}
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
