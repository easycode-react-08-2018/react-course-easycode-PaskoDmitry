import React, {Component} from 'react';


export class Resepts extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Имя рецепта" aria-label="Имя рецепта" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button" id="button-addon2">Найти</button>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <button type="button" className="btn btn-primary float-right">Добавить рецепт</button>
                    </div>
                </div>
                <div className="row border border-light p-20">
                    <div className="row p-20 border-bottom">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="card-img-top" src="1.jpg" alt="Card image cap"/>
                                        <h4 className="mt-2">Pasta Carbonare</h4>
                                </div>
                                <div className="col-md-6">
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
                        <div className="col-md-6 d-flex">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-end">
                                    <span>Всего ингридиентов:<span className="badge badge-primary badge-pill">5</span></span>
                                </div>
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-secondary btn-sm">Редактировать</button>
                                    <button type="button" className="btn btn-danger btn-sm">Удалить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-20 border-bottom">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="card-img-top" src="1.jpg" alt="Card image cap"/>
                                        <h4 className="mt-2">Pasta Carbonare</h4>
                                </div>
                                <div className="col-md-6">
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
                        <div className="col-md-6 d-flex">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-end">
                                    <span>Всего ингридиентов:<span className="badge badge-primary badge-pill">5</span></span>
                                </div>
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-secondary btn-sm">Редактировать</button>
                                    <button type="button" className="btn btn-danger btn-sm">Удалить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

