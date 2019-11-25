import React from 'react'

import '../component/Sort.css'

const Sort = props => {
    return (
        <div className="btnSort">
            <button type="button" onClick={props.ASC}>A-Z</button>
            <button type="button" onClick={props.DESC}>Z-A</button>
            <button type="button" onClick={props.Normal}>Original</button>
        </div>
    )
}

export default Sort
