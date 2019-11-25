import React, { useState, useEffect } from 'react'

import '../component/List.css'
import { Card, ListGroup } from 'react-bootstrap'


const List = props => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(props.data.length)
    }, [props.data.length])

    const myStyle = {
        fontWeight: 300,
        lineHeight: '30px',
        marginLeft: '30%',
        listStyle: 'none'
    }
    const listStyle = {
        width: '50%',
        cursor: 'pointer',
        marginBottom: '1%',
        border: '2px solid'
    }
    const { data } = props
    return (
        <div>
            {
                count < 10 &&
                <p>Found {count} data</p>
            }
            <ul style={myStyle}>
                {
                    data.map((people, i) => {
                        return (
                            <Card style={listStyle} key={i}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item onClick={(e) => e.target.classList.toggle('show')} className="people">
                                        {people.name}
                                        <div>
                                            <p>Height : {people.height}</p>
                                            <p>Mass : {people.mass}</p>
                                            <p>Gender : {people.gender}</p>
                                            <p>Hair Color : {people.hair_color}</p>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default List
