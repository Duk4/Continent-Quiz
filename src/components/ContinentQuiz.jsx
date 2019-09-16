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
                score: 0,
                selected: null,
                clickable: true,
                showNext: false,
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

    next = i => {
        let add;

        if (this.state.quiz.selected === this.state.quiz.questions[i].correct) {
            add = this.state.quiz.score + 750;
        } else {
            add = this.state.quiz.score;
        }

        if (i < 4) {
            this.setState({
                showScore: {
                    ...this.state.quiz,
                    score: add,
                    selected: null,
                    clickable: true,
                    showNext: false
                }
            });
        } else {
            this.setState({
                showScore: {
                    ...this.state.quiz,
                    score: add,
                    selected: null,
                    clickable: true,
                    showNext: false,
                    showScore: true
                }
            });
        }

        return i++;
    };

    handleGameStart = () => {
        const game = true;
        this.setState({ game });
    };

    handleGameFinish = (score) => {
        const lastScore = { date: new Date(), score };

        this.setState(state => ({
            game: null,
            quiz: {
                questions: [],
                score: 0,
                selected: null,
                clickable: true,
                showNext: false,
                showScore: false
            },
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