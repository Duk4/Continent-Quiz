import React from 'react';
import moment from 'moment';

class HighScore extends React.Component {
    render() {
        const { highScore } = this.props;


        return (
            <div>
                {
                    highScore.map((place, index, highScore) =>
                        <div className="place" key={index}>
                            <div className="place-number">#{index + 1}</div>
                            <div className="points">
                                <div className="date">on {moment(place.date).format('l')}</div>
                                <div className="points-scored">{place.score + ' pts'}</div>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default HighScore;