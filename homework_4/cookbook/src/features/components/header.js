import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Logo</Link>
                <div>
                    <Link className="btn btn-outline-info my-2 my-sm-0" to="/sign-in">Sign In</Link>
                    <Link className="btn btn-outline-info my-2 my-sm-0" to="/sign-up">Sign Up</Link>
                </div>
            </nav>
        );
    }
}

