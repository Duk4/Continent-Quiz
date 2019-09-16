import React from 'react';
import Option from './Option';
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

class Options extends React.Component {
    render() {
        const { i, quiz, clickHandler } = this.props;
        const options = quiz.questions[i].options;

        return (
            <div>
                {
                    options.map((option, index) =>
                        <Option option={option} key={index} index={index} quiz={quiz} clickHandler={clickHandler} />
                    )
                }
            </div>
        );
    }
}

export default Options;