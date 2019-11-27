import React, { useState, useEffect } from 'react'

import List from '../components/List'
import Search from '../components/Search'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Home = (props) => {
    const [title] = useState('All Countries')
    const [country, setCountry] = useState(null)
    const [searchVal, setSearchVal] = useState('belgium')
    const [tempList, setTempList] = useState(null)
    const [load, setLoad] = useState(false)

    const searchList = (e) => {
        setSearchVal(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault()
        if (searchVal) {
            fetch(`https://restcountries.eu/rest/v2/name/${searchVal}?fields=flag;name;capital;currencies`)
                .then(response => response.json())
                .then((data) => {
                    if (!data.status) {
                        setCountry(data)
                    }
                })
                .catch(err => console.log(err))
        } else {
            setCountry(tempList)
        }
    }

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${searchVal}?fields=flag;name;capital;currencies`)
            .then(response => response.json())
            .then((data) => {
                let newArr = data.map(a => ({ ...a }));
                setCountry(data)
                setTempList(newArr)
                setLoad(true)
            })
            .catch(err => console.log(err))
    }, [])

    if (!load) return (
        <div className="loadingScreen">
            Loading...
        </div>
    )

    const containerStyle = {
        textAlign: 'center'
    }
    return (
        <div style={containerStyle}>
            <h3>{title}</h3>
            <Search searching={searchList} submit={submitSearch} />
            <List data={country} />
        </div >
    )
}

export default Home
