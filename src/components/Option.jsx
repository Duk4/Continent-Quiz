import React from 'react';
import CategoryIcon from '@material-ui/icons/Category';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

const right = (<div className="right">
    <DoneIcon />
</div>
);

const wrong = (<div className="wrong">
    <ClearIcon />
</div>
);

class Option extends React.Component {
    render() {
        return (
            <div className="option">
                <div className="category">
                    <CategoryIcon />
                </div>
                <span>Africa</span>
                <div className="answer"></div>
            </div>
        );
    }
}

export default Option;