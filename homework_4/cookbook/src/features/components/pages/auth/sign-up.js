import React, {Component} from 'react';

export class SignUp extends Component {
    render() {

        return (
            <div className="jumbotron container mt-5 pb-3 pt-4 sign-form">
                <p className="border-bottom">Welcome to flat earth</p>

                <form>

                    <div className="form-group">
                        <input type="text" name="email"
                               className="form-control"
                               placeholder="enter email"/>

                    </div>
                    <div className="form-group">
                        <input type="password" name="password"
                               className="form-control" placeholder="enter password"/>

                    </div>
                    <div className="form-group">

                        <input type="password" name="confirmPassword"
                               className="form-control" placeholder="confirm password"/>

                    </div>
                    <div className="form-group">
                        <input type="text" name="name"
                               className="form-control"
                               placeholder="enter user name"/>

                    </div>
                    <div className="form-group">
                        <button type="button"
                                className="btn btn-primary">Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

