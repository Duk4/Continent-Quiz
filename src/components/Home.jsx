import React from 'react';
import LeaderboardPlace from './LeaderboardPlace';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h3>Your Scores</h3>
                <div className="leaderboard">
                    <LeaderboardPlace />
                </div>
                <div className="home-btns">
                    <button className="home-icon">
                        <HomeIcon />
                    </button>
                    <button className="play-btn">
                        <div className="category"><CategoryIcon /></div> <span>Play</span>
                    </button>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Home;