import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

class HighScore extends React.Component {
    render() {
        const { highScore } = this.props;

        if (highScore.length >= 1) {
            return (
                <div>
                    {
                        highScore.map((place, index) =>
                            <div className="place" key={index}>
                                <div className="place-number">#{index + 1}</div>
                                <div className="points">
                                    <div className="date">on {moment(place.date).format('l')}</div>
                                    <div className="points-scored">{numeral(place.score).format('0,0') + ' pts'}</div>
                                </div>
                            </div>
                        )}
                </div>
            );
        } else {
            return (
                <h4>No Score</h4>
            )
        };
    }
}

export default HighScore;