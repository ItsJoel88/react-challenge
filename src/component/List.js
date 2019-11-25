import React, { Component } from 'react'

import '../component/List.css'
import { Card, ListGroup } from 'react-bootstrap'


class List extends Component {

    state = {
        filtered: []
    }

    showDetail = (e) => {
        e.target.classList.toggle('show')
    }

    render() {
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
        const { data } = this.props
        return (
            <div>
                <ul style={myStyle}>
                    {
                        data.map((people, i) => {
                            return (
                                <Card style={listStyle} key={i}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item onClick={this.showDetail} className="people">
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
}

export default List
