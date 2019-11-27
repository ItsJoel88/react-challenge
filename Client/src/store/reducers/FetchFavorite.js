let favorite = {
    pending: false,
    success: [],
    error: null
}

const fetchFavorite = (state = favorite, action) => {
    switch (action.type) {
        case 'FAVORITE_FETCH_SUCCESS':
            return Object.assign({}, state, {
                success: action.success
            })
        case 'FAVORITE_FETCH_PENDING':
            return Object.assign({}, state, {
                success: action.pending
            })
        case 'FAVORITE_FETCH_ERROR':
            return Object.assign({}, state, {
                success: action.error
            })
        default:
            return state;
    }
}

export default fetchFavorite
