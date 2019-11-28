import { bindActionCreators } from "redux"

let favorite = {
    pending: false,
    success: [],
    error: null
}

const fetchFavorite = (state = favorite, action) => {
    switch (action.type) {
        case 'FAVORITE_FETCH_SUCCESS':
            if (typeof action.success === 'string') {
                return Object.assign({}, state, {
                    success: [...state.success.filter(fav => fav._id !== action.success)]
                })
            }
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
