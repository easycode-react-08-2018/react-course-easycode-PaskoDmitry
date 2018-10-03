import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sendRequest } from '../../../../store/actions/cook-actions/sendRequest';



export class SignInComponent extends Component {
    constructor() {
        super();

        this.state = {
            name: null,
            password: null,
        }


    }

    sendRequest = () => {
        const { sendRequest, auth } = this.props;

        sendRequest({
            type: 'login',
            auth_data: this.state,
        })
    }

    handleInputChange = (event) => {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="jumbotron container mt-5 pb-3 pt-4 sign-form">
                <p className="border-bottom">Welcome to flat earth</p>
                <form>

                    <div className="form-group">
                        <input type="text" name="name" onChange={this.handleInputChange}  className="form-control" placeholder="enter user name"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" onChange={this.handleInputChange} className="form-control" placeholder="enter password"/>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox pb-1">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                            <label className="custom-control-label" for="customCheck1">Remember Me</label>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.sendRequest}>Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state
    }
}

const mapDispatchToProps = {
    sendRequest
}

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
