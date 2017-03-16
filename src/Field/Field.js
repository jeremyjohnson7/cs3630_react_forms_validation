import React from 'react';
import './Field.css';

class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            valid: false
        };
    }

    onChange(event) {
        this.setState({
            value: event.target.value,
            valid: this.props.regex.test(event.target.value)
        });

        this.props.onChange({
            value: event.target.value,
            valid: this.props.regex.test(event.target.value)
        });
    }

    render() {
        return (
            <div className="field">
                <label>{this.props.label}</label>
                <input 
                    type={this.props.type} 
                    onChange={this.onChange.bind(this)}
                    value={this.state.value}
                    />
                <span className={!this.state.valid ? 'invalid' : 'invalid hidden'}>{this.props.errmsg || "Invalid"}</span>
            </div>
        )
    }
}

export default Field;
