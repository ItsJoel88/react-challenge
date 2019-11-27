import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavorites } from '../store/actions'

import { Card, Container, Row, Col, CardColumns } from 'react-bootstrap'

const Favorite = (props) => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.favorite.success)

    useEffect(() => {
        dispatch(fetchFavorites())
    }, [])

    const deleteHandler = () => {
        console.log('haloo')
    }

    if (!data) return <p>Loading...</p>

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '2%' }}>My favorite countries</h1>
            <CardColumns>
                {
                    data.map((favorite, i) => {
                        return (
                            <Card key={favorite._id}>
                                <Card.Img variant="top" src={favorite.image} style={{ borderBottom: '2px solid' }} />
                                <Card.Body>
                                    <Card.Title>{favorite.name}</Card.Title>
                                    <Card.Text>
                                        Capital : {favorite.capital}
                                    </Card.Text>
                                    <Card.Text style={{ float: 'right', marginTop: '-20%', color: 'red', cursor: 'pointer' }} onClick={deleteHandler}>X</Card.Text>
                                </Card.Body>
                            </Card>
                        )

                    })
                }
            </CardColumns>

        </div>
    )
}


export default Favorite
