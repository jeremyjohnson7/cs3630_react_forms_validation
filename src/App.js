import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Field from './Field';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            age: '',
            email: '',
            phone: '',
            zip: '',
        };

        // console.log(this.props.children);
    }

    action(val) {
        // console.log(val);
        if (this.validate()) {
            console.log("Successful");
            document.getElementById('display').innerHTML = "Congratulations! All fields are valid.";
        } else {
            console.log("Invalid field values");
            document.getElementById('display').innerHTML = "Oops! At least one field did not pass validation";
        }
    }

    handleNameChange(value) {
        this.setState({
            ...this.state,
            name: value
        });
    }

    handleAgeChange(value) {
        this.setState({
            ...this.state,
            age: value
        });
    }

    handleEmailChange(value) {
        this.setState({
            ...this.state,
            email: value
        });
    }

    handlePhoneChange(value) {
        this.setState({
            ...this.state,
            phone: value
        });
    }

    handleZipChange(value) {
        this.setState({
            ...this.state,
            zip: value
        });
    }

    validate() {
        for (var x in this.state)
            if (!this.state[x].valid)
                return false;

        return true;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Form submitAction={this.action.bind(this)}>
                    <Field
                        type="text"
                        label="Name"
                        regex={/^[a-zA-Z]+((. |[\'\- ])?[a-zA-Z])+(\,? ([a-zA-Z]+\.?)+)?$/}
                        errmsg="Name must follow a conventional name format."
                        onChange={this.handleNameChange.bind(this)}
                        />
                    <Field
                        type="number"
                        min="0"
                        max="199"
                        label="Age"
                        regex={/^1?\d{1,2}$/}
                        errmsg="Age must be a number less than 200"
                        onChange={this.handleAgeChange.bind(this)}
                        />
                    <Field
                        type="text"
                        label="Telephone"
                        regex={/^[0-9]{3}([-.\ ]?)[0-9]{3}\1[0-9]{4}$/}
                        errmsg="Invalid telephone number&mdash;use ten digit format, e.g. 123-456-7890"
                        onChange={this.handlePhoneChange.bind(this)}
                        />
                    <Field
                        type="text"
                        label="E-mail"
                        regex={/^[a-z0-9\._\-\+]+@[a-z0-9\.\-]+\.[a-zA-Z]{2,}$/}
                        errmsg="Invalid e-mail address"
                        onChange={this.handleEmailChange.bind(this)}
                        />
                    <Field
                        type="text"
                        label="Zip Code"
                        regex={/^[0-9]{5}(?:\-[0-9]{4})?$/}
                        errmsg="Invalid zip code"
                        onChange={this.handleZipChange.bind(this)}
                        />
                </Form>
                {/*<div className="a">{this.validate()}</div>*/}
                <div id="display"></div>
            </div>
        );
    }
}

export default App;
