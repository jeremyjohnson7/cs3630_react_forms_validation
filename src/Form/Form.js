import React from 'react';
import Field from '../Field';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    // onSubmit() {
    //     this.props.submitAction(this.state);
    // }

    render(){
        return (
            <div className="form">
                {this.props.children}
                <button onClick={this.props.submitAction.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default Form;
