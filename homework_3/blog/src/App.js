import React, {Component} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {SignIn} from './components/sign-in-page';
import {SignUp} from './components/sign-up-page';
import {Users} from './components/users-page';

class App extends Component {

    constructor() {
        super();

        this.state = {
            activePage: 'usersPage',
            name: null,
            password: null,
            confirmPassword: null,
            email: null,
            errors: {},
            users: {},
            ifLogIn: false
        }


    }

    handleInputChange = (event) => {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    changePageToSignIn = () => {
        this.setState({
            activePage: 'signInPage'
        });
    }
    changePageToSignUp = () => {
        this.setState({
            activePage: 'signUpPage'
        });
    }

    changePageToUsers = () => {
        this.setState({
            activePage: 'usersPage'
        });
    }

    signOut = () => {
        this.setState({
            name: null,
            password: null,
            confirmPassword: null,
            email: null,
            errors: {},
            ifLogIn: false
        });
    }

    validate = (key) => {
        let errors = {};

        if (!this.state.name)
            errors.name = "Name field is empty";
        else if (/[^a-zA-Z0-9_-]/.test(this.state.name))
            errors.name = "You can use only a-z, A-Z, 0-9, - и _.";


        if (!this.state.password)
            errors.password = "Password field is empty";
        else if (this.state.password.length < 4)
            errors.password = "Password should be more than 4 simbols";

        if (key === 'signup') {
            if (!this.state.confirmPassword)
                errors.confirmPassword = "confirmPassword field is empty";
            else if (this.state.confirmPassword !== this.state.password)
                errors.confirmPassword = "confirmPassword isn't the same as password";

            if (!this.state.email)
                errors.email = "Email field is empty";
            else if (!((this.state.email.indexOf(".") > 0) && (this.state.email.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(this.state.email))
                errors.email = "Email is incorrect";
        }

        return errors;

    }

    sendRequest = (arg) => {

        let errors = this.validate(arg);
        let params;
        if (Object.keys(errors).length) {
            this.setState({
                errors: errors
            });
            return;
        } else {
            this.setState({
                errors: ''
            });
            if (arg === 'signup') {
                params = {
                    email: this.state.email,
                    user: this.state.name,
                    password: this.state.password
                }
            } else {
                params = {
                    user: this.state.name,
                    password: this.state.password
                }
            }
        }

        fetch('https://flatearth-api.herokuapp.com/api/v1/auth/' + arg, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                params
            )
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.status === 'error'){
                    this.setState({
                        errors: {
                           requestErrors: res.message
                        }
                    });
                }else if (arg === 'signup'){
                    this.setState({
                        activePage: 'signInPage',
                        errors: {}
                    });
                }else {
                    this.setState({
                        token: res.message.token,
                        errors: {},
                        ifLogIn: true
                    });
                    this.sendSecretRequest();
                }
            });

    }


    sendSecretRequest = () => {

        fetch('https://flatearth-api.herokuapp.com/api/v1/auth/secret', {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  this.state.token
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                if(res.status === 'error'){
                    this.setState({
                        errors: {
                            requestErrors: res.message
                        }
                    });
                }else{
                    this.setState({
                        activePage: 'usersPage',
                        errors: {},
                        users: res.message
                    });
                }
            });

    }

    render() {

        const {
            activePage,
        } = this.state;

        let buttons = this.state.ifLogIn ? <div className="input-group mb-3"><button type="btn" className="btn btn-primary" onClick={this.signOut}>Sign Out</button></div> : <div className="input-group mb-3">
            <button type="btn" className="btn btn-primary" onClick={this.changePageToSignIn}>Sign In</button>
            <button type="btn" className="btn btn-primary" onClick={this.changePageToSignUp}>Sign Up</button>
        </div>

        let nameInHeader = this.state.ifLogIn ? <span>{this.state.name}</span> : ''

        if (activePage === 'usersPage') {
            return (
                <div>
                    <div>
                        {nameInHeader}
                        {buttons}
                    </div>

                    <Users users={this.state.users}/>
                </div>
            )
        }

        if (activePage === 'signInPage') {
            return (
                <div>
                    {buttons}
                    <SignIn
                        handleInputChange={this.handleInputChange}
                        sendRequest={this.sendRequest}
                        errors={this.state.errors}
                    />
                </div>
            )
        }

        if (activePage === 'signUpPage') {
            return (
                <div>
                    {buttons}
                    <SignUp
                        handleInputChange={this.handleInputChange}
                        sendRequest={this.sendRequest}
                        errors={this.state.errors}
                    />
                </div>
            )
        }


    }
}

export default App;
