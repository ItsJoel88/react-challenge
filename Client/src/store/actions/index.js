export const search = () => {
    return {
        type: 'SEARCH'
    }
}

export const logout = (input) => {
    return {
        type: 'LOGIN_SUCCESS',
        success: input
    }
}

export const setLogin = (input) => {
    return {
        type: 'LOGIN_SUCCESS',
        success: input
    }
}

export const login = (input) => async dispatch => {
    dispatch({ type: 'LOGIN_PENDING', pending: true })
    dispatch({ type: 'LOGIN_SUCCESS', success: false })
    dispatch({ type: 'LOGIN_ERROR', error: null })
    let data = {
        email: input.email,
        password: input.password
    }
    try {
        const response = await fetch('http://react-countries.itsjoel.site/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const content = await response.json()
        if (!content.token) {
            throw content.message
        } else {
            localStorage.setItem('token', content.token)
            dispatch({ type: 'LOGIN_PENDING', pending: false })
            dispatch({
                type: 'LOGIN_SUCCESS',
                success: true
            })
            input.history.push('/')
            input.alert.show('Login success', {
                type: 'success'
            })
        }
    } catch (err) {
        console.log(err)
        dispatch({ type: 'LOGIN_ERROR', error: err })
    }
}

export const register = (input) => async dispatch => {
    dispatch({ type: 'REGISTER_PENDING', pending: true })
    dispatch({ type: 'REGISTER_SUCCESS', success: false })
    dispatch({ type: 'REGISTER_ERROR', error: null })
    let data = {
        name: input.name,
        email: input.email,
        password: input.password
    }
    try {
        const response = await fetch('http://react-countries.itsjoel.site/users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const content = await response.json()
        // console.log(content)
        if (!content._id) {
            throw content
        } else {
            dispatch({ type: 'REGISTER_PENDING', pending: false })
            dispatch({ type: 'REGISTER_SUCCESS', success: true })
            input.history.push('/login')
            input.alert.show('Register success', {
                type: 'success'
            })
        }
    } catch (err) {
        dispatch({ type: 'REGISTER_ERROR', error: err })
    }
}

export const fetchFavorites = () => async dispatch => {
    dispatch({ type: 'FAVORITE_FETCH_PENDING', pending: true })
    dispatch({ type: 'FAVORITE_FETCH_SUCCESS', success: [] })
    dispatch({ type: 'FAVORITE_FETCH_ERROR', error: null })

    try {
        const token = localStorage.getItem('token')
        const response = await fetch('http://react-countries.itsjoel.site/favorites', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': token
            }
        })
        const content = await response.json()
        dispatch({ type: 'FAVORITE_FETCH_PENDING', pending: false })
        dispatch({ type: 'FAVORITE_FETCH_SUCCESS', success: content })
    } catch (err) {
        dispatch({ type: 'FAVORITE_FETCH_ERROR', error: err })
    }
}

export const addFavorite = (input) => async dispatch => {
    dispatch({ type: 'ADD_FAVORITE_PENDING', pending: true })
    dispatch({ type: 'ADD_FAVORITE_SUCCESS', success: false })
    dispatch({ type: 'ADD_FAVORITE_ERROR', error: null })
    const data = {
        name: input.name,
        capital: input.capital,
        image: input.flag
    }

    try {
        const token = localStorage.getItem('token')
        const response = await fetch('http://react-countries.itsjoel.site/favorites', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify(data)
        })
        const content = await response.json()
        dispatch({ type: 'ADD_FAVORITE_PENDING', pending: false })
        dispatch({ type: 'ADD_FAVORITE_SUCCESS', success: content })
        input.alert.show('Country added to favorite', {
            type: 'success'
        })
    } catch (err) {
        input.alert.show('Oh look an error occurred' + err, {
            type: 'error'
        })
        dispatch({ type: 'ADD_FAVORITE_ERROR', error: err })
    }
}

export const deleteFavorite = (input) => async dispatch => {
    dispatch({ type: 'DELETE_FAVORITE_PENDING', pending: true })
    dispatch({ type: 'DELETE_FAVORITE_SUCCESS', success: false })
    dispatch({ type: 'DELETE_FAVORITE_ERROR', error: null })
    const id = input.id

    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://react-countries.itsjoel.site/favorites/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': token
            }
        })
        const content = await response.json()
        dispatch({ type: 'DELETE_FAVORITE_PENDING', pending: false })
        dispatch({ type: 'FAVORITE_FETCH_SUCCESS', success: id })
        input.alert.show('Delete success', {
            type: 'success'
        })
    } catch (err) {
        input.alert.show('Oh look an error occurred' + err, {
            type: 'error'
        })
        dispatch({ type: 'DELETE_FAVORITE_ERROR', error: err })
    }
}
