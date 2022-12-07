import React, {Component} from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store, {persistor} from "./Redux/redux-store";
import {Header} from "./components/Header/Header"
import {Auth} from "./components/Auth/Auth";
import {SignIn} from "./components/Auth/Login/SignIn";
import {SignUp} from "./components/Auth/Login/SignUp";
import {Homepage} from "./components/Homepage/Homepage";
import {PersistGate} from 'redux-persist/integration/react';

class App extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className={'bodyWrapper'}>
                <Header/>
                <Switch>
                    <Route exact path='/'
                           render={() => <Redirect to={"/welcome"}/>}/>
                    <Route path='/welcome'>
                        <Auth/>
                    </Route>
                    <Route path='/sign-in'>
                        <SignIn/>
                    </Route>
                    <Route path='/sign-up'>
                        <SignUp/>
                    </Route>
                    <Route path='/home'>
                        <Homepage/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = () => ({})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {})
)(App);

const FilmApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppContainer/>
            </PersistGate>
        </Provider>
    </HashRouter>
}

export default FilmApp;