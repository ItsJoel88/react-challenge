import React from 'react'

import './List.css'
import { Container, Card } from 'react-bootstrap'


const List = (props) => {
    const { data } = props
    return (
        <div>
            <>
                <Container style={{ width: '50%' }}>
                    <Card style={{ display: 'block', border: 'none', backgroundColor: 'wheat' }}>
                        <Card.Img className="containerCard" variant="top" src={data[0].flag} style={{ height: '300px', width: '100%' }} />
                        <Card.Body>
                            <ul>
                                <li>
                                    Name : {data[0].name}
                                </li>
                                <li>
                                    Capital : {data[0].capital}
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        </div>
    )

}

export default List
