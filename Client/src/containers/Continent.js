import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link, Switch, Route, useHistory } from 'react-router-dom'

import { Container, Row, Col, Button } from 'react-bootstrap'

import Detail from '../components/DetailCountry'

const Continent = (props) => {
    const history = useHistory()
    const { path, url } = useRouteMatch()
    const { name } = props
    const [countryList, setCountryList] = useState([])
    const [load, setLoad] = useState(false)

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
        if (!localStorage.getItem('token')) {
            history.push('/login')
        }
        // else{

        // }
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
                                                <img alt="country" src={country.flag} style={{ height: '300px', width: '300px' }}></img>
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
