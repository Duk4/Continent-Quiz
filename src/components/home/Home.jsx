import React from 'react';
import HighScore from './HighScore';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';

const Home = (props) => {
    const { highScore, onGameStart, message } = props;
    function refresh() {
        window.location.reload();
    }

    if (message) {
        return message;
    }

    return (
        <div className="home">
            <h3>Your Scores</h3>
            <HighScore highScore={highScore} />
            <div className="home-btns">
                <button className="home-icon" onClick={refresh} aria-label="home button">
                    <HomeIcon />
                </button>
                <button className="play-btn" onClick={onGameStart}>
                    <div className="category"><CategoryIcon /></div> <span>Play</span>
                </button>
                <div></div>
            </div>
        </div>
    );
}

export default Home;