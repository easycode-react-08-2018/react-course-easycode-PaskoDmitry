import React, {Component} from 'react';
import {SignIn} from './pages/auth/sign-in';
import {SignUp} from './pages/auth/sign-up';
import {Resepts} from './pages/resepts';
import {ReseptEdit} from './pages/resept-edit';
import {Home} from './pages/home';

import {Route, Link, Redirect} from 'react-router-dom';

export class Main extends Component {

    render() {
        return (
            <div>
                <Route exact path='/' component={Home}/>
                <Route exact path='/sign-in' render={() => (
                    <SignIn/>)}/>
                <Route exact path='/sign-up' render={() => (
                    <SignUp/>)}/>
                <Route exact path='/resepts' render={() => (
                    <Resepts/>)}/>
                <Route exact path='/resept-edit' render={() => (
                    <ReseptEdit/>)}/>
            </div>
        );
    }
}

