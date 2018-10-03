import React, {Component} from 'react';


export class ReseptEdit extends Component {
    render() {
        return (
            <div className="container">
                <div className="row border border-light p-20">
                    <div className="col-md-4">
                        <img className="card-img-top" src="2.png" alt="Card image cap"/>
                            <button className="btn  ml-2 my-2 my-sm-0 btn-primary">Load</button>
                            <button className="btn  ml-2 my-2 my-sm-0 btn-primary">Delete</button>
                    </div>
                    <div className="col-md-8 border border-light p-20">
                        <h2>Name</h2>

                        <div className="input-group mb-3">
                            <label for="basic-url">Name</label>
                            <input type="text" className="form-control" id="basic-url"/>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action active">
                                        Recepies
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                                    <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                                    <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                                    <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                                </div>
                            </div>
                            <div className="col-md-1 d-flex align-self-center align-items-start flex-column">
                                <button type="button" className="btn btn-outline-dark d-flex"></button>
                                <button type="button" className="btn btn-outline-dark d-flex"></button>
                            </div>
                            <div className="col-md-5">
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action active">
                                        Recepies
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                                    <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                                    <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                                    <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

