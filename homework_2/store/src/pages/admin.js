import React, {Component} from 'react';

export class Admin extends Component {

    constructor() {
        super();

        this.state = {
            input: ''
        }

    }

    handleChange = (event) => {

        this.setState({
            input: event.target.value
        });
    }


    render() {
        return (
            <div className="container flex-grow-1">
                <div className="row">
                    <div className="col-8">
                        <div className="admin-orders">
                            <h1>ADMIN PAGE</h1>
                            <ul className="list-group">
                                {
                                    this.props.products.map(product => {
                                        return (
                                            <li className="list-group-item">
                                                <img src="#" alt=""/>
                                                <a href="#" className="admin-orders__link">
                                                    {product.name}
                                                </a>
                                                <h2 className="float-right btn-link">✎</h2>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <br/>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" className="form-control" placeholder="enter new name"
                                       onChange={this.handleChange}/>
                                <button className="btn btn-primary"
                                        onClick={() => this.props.addProduct(this.state.input)}>Add
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            Admin
                        </div>
                        <button onClick={this.props.changePageToHome}>User Logout</button>
                    </div>
                </div>
            </div>
        );
    }
}
