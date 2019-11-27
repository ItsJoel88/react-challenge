let user = {
    pending: false,
    success: false,
    error: null
}

const isLoggedin = (state = user, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return Object.assign({}, state, {
                pending: action.pending
            })
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                success: action.success
            })
        case 'LOGIN_ERROR':
            return Object.assign({}, state, {
                error: action.error
            })
        default:
            return state;
    }
}

export default isLoggedin
