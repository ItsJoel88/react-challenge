import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'

const Detail = (props) => {
    let { name } = useParams()
    const [detail, setDetail] = useState(null)

    const numberFormat = (input) => {
        return input.toLocaleString()
    }

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(response => response.json())
            .then(data => {
                setDetail(data[0])
            })
            .catch(err => console.log(err))
    }, [name])

    if (!detail) return <p>Loading...</p>

    return (
        <Card style={{ width: '18rem', margin: '0 auto' }}>
            <Card.Img variant="top" src={detail.flag} />
            <Card.Body>
                <Card.Title>{detail.name}</Card.Title>
                <Card.Text>
                    Capital : {detail.capital}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Population : {numberFormat(detail.population)}</ListGroupItem>
                <ListGroupItem>Currency : {detail.currencies[0].name} ({detail.currencies[0].code})</ListGroupItem>
                <ListGroupItem>
                    <p>Languages : </p>
                    <ul>
                        {detail.languages.map((language, i) => <li key={i}>{language.name}</li>)}
                    </ul>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default Detail
