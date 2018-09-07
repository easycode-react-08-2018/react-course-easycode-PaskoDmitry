import React, {Component} from 'react';

export class SignUp extends Component {
    render() {
        const style = {
            color: 'red'
        }
        return (
            <div className="container">
                <span style={style}>{this.props.errors.requestErrors}</span>
                <form>
                    <div className="form-group">
                        <input type="text" name="email" onChange={this.props.handleInputChange} className="form-control"
                               placeholder="enter email"/>
                        <span style={style}>{this.props.errors.email}</span>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" onChange={this.props.handleInputChange}
                               className="form-control" placeholder="enter password"/>
                        <span style={style}>{this.props.errors.password}</span>
                    </div>
                    <div className="form-group">

                        <input type="password" name="confirmPassword" onChange={this.props.handleInputChange}
                               className="form-control" placeholder="confirm password"/>
                        <span style={style}>{this.props.errors.confirmPassword}</span>
                    </div>
                    <div className="form-group">
                        <input type="text" name="name" onChange={this.props.handleInputChange} className="form-control"
                               placeholder="enter user name"/>
                        <span style={style}>{this.props.errors.name}</span>
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={() => this.props.sendRequest('signup')}
                                className="btn btn-primary">Register
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}

