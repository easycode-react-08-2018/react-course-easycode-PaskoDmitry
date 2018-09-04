import React, {Component} from 'react';

export class User extends Component {

    render() {
        return (
            <div className="container">
                <h1>USER PAGE</h1>
                <div className="row">
                    <div className="col-8">

                        <div className="row">
                            {
                                this.props.products.map(product => {

                                    let prodButton;
                                    if (!(product.status)) {
                                        prodButton = <a href="#" className="btn btn-primary"
                                                        onClick={() => this.props.addProductToCart(product)}>
                                            Buy
                                        </a>;
                                    } else {
                                        prodButton = <div>
                                            <button className="btn btn-light" disabled>Buy</button>
                                            <h3 className="text-success">✓✓✓✓✓</h3>
                                        </div>;
                                    }

                                    return (
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-text">{product.name}</p>
                                                {prodButton}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            User
                        </div>
                        <button onClick={this.props.changePageToHome}>User Logout</button>
                        <button onClick={this.props.changePageToCart}>Orders</button>
                    </div>
                </div>
            </div>
        );
    }
}
