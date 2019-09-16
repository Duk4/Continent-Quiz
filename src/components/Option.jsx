import React from 'react';
import CategoryIcon from '@material-ui/icons/Category';

class Option extends React.Component {
    render() {
        const { option, index, quiz, clickHandler } = this.props;

        const className = (index === quiz.selected) ? 'option selected' : 'option';
        const clickable = (quiz.clickable === true) ? (() => clickHandler(index)) : null;

        return (
            <div className={className} onClick={clickable}>
                <div className="category">
                    <CategoryIcon />
                </div>
                <span>{option}</span>
                <div className="answer"></div>
            </div>
        );
    };
};

export default Option;