import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavorites, deleteFavorite } from '../store/actions'

import { Card, CardColumns } from 'react-bootstrap'
import { useAlert } from 'react-alert'

const Favorite = (props) => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.favorite.success)
    const alert = useAlert()

    useEffect(() => {
        dispatch(fetchFavorites())
    }, [])

    const deleteHandler = (id) => {
        dispatch(deleteFavorite({ id, alert }))
        dispatch(fetchFavorites())
    }

    if (!data || data.length === undefined) return <p>Loading...</p>
    else {
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
                                        <Card.Text style={{ float: 'right', marginTop: '-20%', color: 'red', cursor: 'pointer' }} onClick={(() => deleteHandler(favorite._id))}>X</Card.Text>
                                    </Card.Body>
                                </Card>
                            )

                        })
                    }
                </CardColumns>
            </div>
        )
    }
}


export default Favorite
