import React from 'react';
import moment from 'moment';

class LeaderboardPlace extends React.Component {
    render() {
        return (
            <div className="place">
                <div className="place-number">#1</div>
                <div className="points">
                    <div className="date">on 14/9/2019</div>
                    <div className="points-scored">2,500pts</div>
                </div>
            </div>
        );
    }
}

export default LeaderboardPlace;