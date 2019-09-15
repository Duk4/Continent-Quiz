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

    render() {
        const { game, highScore, fetchError, quiz } = this.state;

        if (game === null) {
            return (
                <Home
                    highScore={highScore}
                    message={fetchError ? "Couldn't load the data. Sorry!" : null}
                    onGameStart={this.handleGameStart}
                />
            );
        }

        return (
            <Quiz
                game={game}
                quiz={quiz}
                onFinish={this.handleGameFinish}
            />
        );
    }
};

export default ContinentQuiz;