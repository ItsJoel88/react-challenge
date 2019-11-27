import React from 'react'

// import { useDispatch } from 'react-redux'

const Search = (props) => {
    return (
        <div style={{ marginBottom: '1%' }}>
            <form onSubmit={props.submit}>
                <input style={{ borderRadius: '12px' }} onChange={props.searching} type="text" placeholder="Search by Country Name" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}


export default Search
