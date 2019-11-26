import React from 'react'
import { Switch, Route, Link, useHistory, withRouter } from 'react-router-dom'

import Home from '../containers/Home'
import Continent from '../containers/Continent'
import Login from '../containers/Login'

import './Navbar.css'

function PrivateRoute() {
    let history = useHistory()
    return (
        <Route>
            {
                localStorage.getItem('token') ? <h1>Hello favorite</h1> : history.push('/login')
            }
        </Route>
    )
}

const Navigation = (props) => {
    const logoutHandler = () => {
        localStorage.clear()
        props.history.replace('/login')
    }

    return (
        <div>
            <ul className="navigationBar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/asia">Asia</Link>
                </li>
                <li>
                    <Link to="/europe">Europe</Link>
                </li>
                <li>
                    <Link to="/africa">Africa</Link>
                </li>
                <li>
                    <Link to="/favorite">Favorites</Link>
                </li>
                {
                    localStorage.getItem('token') ?
                        <li onClick={logoutHandler}>Logout</li> :
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                }
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/asia">
                    <Continent name="asia" />
                </Route>
                <Route path="/europe">
                    <Continent name="europe" />
                </Route>
                <Route path="/africa">
                    <Continent name="africa" />
                </Route>
                <PrivateRoute path="/favorite">
                </PrivateRoute>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}

export default withRouter(Navigation)
