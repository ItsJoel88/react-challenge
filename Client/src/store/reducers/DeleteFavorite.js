const removeFav = {
    pending: false,
    success: false,
    error: null
}

const deleteFavorite = (state = removeFav, action) => {
    switch (action.type) {
        case 'DELETE_FAVORITE_PENDING':
            return Object.assign({}, state, {
                pending: action.pending
            })
        case 'DELETE_FAVORITE_SUCCESS':
            return Object.assign({}, state, {
                success: action.success
            })
        case 'DELETE_FAVORITE_ERROR':
            return Object.assign({}, state, {
                error: action.error
            })
        default:
            return state;
    }
}

export default deleteFavorite
