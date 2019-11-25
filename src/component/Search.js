import React, { Component } from 'react'

class Search extends Component {

    render() {
        return (
            <div style={{ marginBottom: '1%' }}>
                <form onSubmit={this.props.submit}>
                    <input style={{ borderRadius: '12px' }} onChange={this.props.searching} type="text" placeholder="Search..." />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}


export default Search
