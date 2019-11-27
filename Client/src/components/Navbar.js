import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { logout } from '../store/actions'

import './Navbar.css'


const Navigation = (props) => {
    const isLogin = useSelector((state) => state.login.success)
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout(false))
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
                    isLogin ?
                        <li onClick={logoutHandler}>Logout</li> :
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                }
            </ul>
        </div>
    )
}

export default withRouter(Navigation)
