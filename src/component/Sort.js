import React, { useState, useEffect } from 'react'

import '../component/Sort.css'

const Sort = props => {
    const [Sort] = useState(props)

    return (
        <div className="btnSort">
            <button type="button" onClick={Sort.ASC}>A-Z</button>
            <button type="button" onClick={Sort.DESC}>Z-A</button>
            <button type="button" onClick={Sort.Normal}>Original</button>
        </div>
    )
}

export default Sort
