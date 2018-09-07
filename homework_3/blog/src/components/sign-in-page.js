import React, {Component} from 'react';


export class SignIn extends Component {
    render() {
        const style = {
            color: 'red'
        }
        return (
            <div className="container">
                <form>

                    <div className="form-group">
                        <input type="text" name="name" className="form-control" placeholder="enter user name"
                               onChange={this.props.handleInputChange}/>
                        <span style={style}>{this.props.errors.name}</span>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" placeholder="enter password"
                               onChange={this.props.handleInputChange}/>
                        <span style={style}>{this.props.errors.password}</span>
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={() => this.props.sendRequest('login')}
                                className="btn btn-primary">Log In
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

