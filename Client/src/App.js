import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from './store/actions'

import Navbar from './components/Navbar'
import Home from './containers/Home'
import Continent from './containers/Continent'
import Login from './containers/Login'
import Register from './containers/Register'
import Favorite from './containers/Favorite'

import './App.css'

function PrivateRoute(props) {
  let history = useHistory()
  return (
    <Route>
      {
        props.status ? <Favorite /> : history.push('/login')
      }
    </Route>
  )
}

const App = (props) => {
  const isLogin = useSelector((state) => state.login.success)
  const dispatch = useDispatch()

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setLogin(true))
    }
    setLoaded(true)
  }, [])

  if (!loaded) return <p>Loading...</p>

  return (
    <div>
      <Navbar />
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
        <PrivateRoute path="/favorite" status={isLogin}>
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  )
}

export default withRouter(App);
