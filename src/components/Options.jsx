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
    clickHandler = index => {
        this.setState({
            selected: index
        });
        console.log(this.props);
    };

    render() {
        const { i, quiz } = this.props;
        const options = quiz.questions[i].options;

        return (
            <div>
                {
                    options.map((option, index) =>
                        <Option option={option} key={index} index={index} quiz={quiz} clickHandler={this.clickHandler} />
                    )
                }
            </div>
        );
    }
}

export default Options;