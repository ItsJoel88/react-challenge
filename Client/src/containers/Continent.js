import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link, Switch, Route, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../store/actions'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { useAlert } from 'react-alert'

import Detail from '../components/DetailCountry'
import './Continent.css'


const Continent = (props) => {
    const login = useSelector((state) => state.login.success)
    const dispatch = useDispatch()
    const history = useHistory()
    const { path, url } = useRouteMatch()
    const { name } = props
    const [countryList, setCountryList] = useState([])
    const [load, setLoad] = useState(false)
    const alert = useAlert()

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/region/${name}?fields=flag;name;capital;currencies`)
            .then(response => response.json())
            .then((data) => {
                setCountryList(data)
                setTimeout(() => {
                    setLoad(true)
                }, 1000)
            })
            .catch(err => console.log(err))
    }, [name])

    const addMyFavorite = (input) => {
        if (!login) {
            history.push('/login')
        }
        else {
            let { name, capital, flag } = input
            dispatch(addFavorite({ name, capital, flag, alert }))
        }
    }

    if (!load) return (
        <div style={{ background: 'url("https://cdn.dribbble.com/users/691308/screenshots/2437923/atlas-loader.gif") no-repeat center', height: '92vh', backgroundSize: 'cover' }}>
        </div>
    )
    return (
        <div style={{ marginTop: '2%' }}>
            <Switch>
                <Route exact path={path}>
                    <Container fluid>
                        <Row>
                            {
                                countryList.map((country, i) => {
                                    return (
                                        <Col key={i}>
                                            <Link to={`${url}/${country.name}`}>
                                                <img className="countryCard" alt="country" src={country.flag}></img>
                                            </Link>
                                            <p>Name : {country.name}</p>
                                            <p>Capital : {country.capital}</p>
                                            <Button onClick={(() => addMyFavorite(country))}>Add to my Favorites</Button>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </Route>
                <Route path={`${path}/:name`}>
                    <Detail />
                </Route>
            </Switch>

        </div>
    )
}


export default Continent
