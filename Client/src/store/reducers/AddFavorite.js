import React from 'react'

const addFavorite = {
    pending: false,
    success: false,
    error: null
}

const pushFavorite = (state = addFavorite, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE_PENDING':
            return Object.assign({}, state, {
                pending: action.pending
            })
        case 'ADD_FAVORITE_SUCCESS':
            return Object.assign({}, state, {
                success: action.success
            })
        case 'ADD_FAVORITE_ERROR':
            return Object.assign({}, state, {
                error: action.error
            })
        default:
            return state;
    }
}

export default pushFavorite
