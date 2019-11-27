let user = {
    pending: false,
    success: false,
    error: null
}

const isRegistered = (state = user, action) => {
    switch (action.type) {
        case 'REGISTER_PENDING':
            return Object.assign({}, state, {
                pending: action.pending
            })
        case 'REGISTER_SUCCESS':
            return Object.assign({}, state, {
                success: action.success
            })
        case 'REGISTER_ERROR':
            return Object.assign({}, state, {
                error: action.error
            })
        default:
            return state
    }
}

export default isRegistered
