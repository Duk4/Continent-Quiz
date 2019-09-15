import React from 'react';
import HighScore from './HighScore';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';

class Home extends React.Component {
    render() {
        const { highScore, onGameStart } = this.props;
        function refresh() {
            window.location.reload();
        }

        return (
            <div className="home">
                <h3>Your Scores</h3>
                <HighScore highScore={highScore} />
                <div className="home-btns">
                    <button className="home-icon" onClick={refresh}>
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
}

export default Home;