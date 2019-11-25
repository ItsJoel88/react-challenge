import React, { Component } from 'react';

import List from './component/List'
import Search from './component/Search'
import Sort from './component/Sort'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {
  state = {
    title: "All Characters",
    peopleList: [],
    tempList: [],
    searchVal: '',
    load: false
  }

  searchList = (e) => {
    this.setState({
      searchVal: e.target.value
    })
  }

  sortAscending = () => {
    let sortedArr = []
    sortedArr = this.state.peopleList.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    })
    this.setState({
      peopleList: sortedArr
    })
  }

  sortDescending = () => {
    let sortedArr = []
    sortedArr = this.state.peopleList.sort((a, b) => {
      if (a.name > b.name) return -1
      if (a.name < b.name) return 1
      return 0
    })
    this.setState({
      peopleList: sortedArr
    })
  }

  originalList = () => {
    this.setState({
      peopleList: this.state.tempList
    })
  }

  submitSearch = (e) => {
    e.preventDefault()
    let filteredList = []
    let currentList = []

    if (this.state.searchVal) {
      currentList = this.state.peopleList
      filteredList = currentList.filter(item => {
        return item.name.includes(this.state.searchVal)
      })
      this.setState({
        peopleList: filteredList
      })
    } else {
      filteredList = this.state.peopleList
      this.setState({
        peopleList: this.state.tempList
      })
    }
  }


  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(({ results }) => {
        this.setState({ peopleList: results, tempList: results.map(a => ({ ...a })), load: true })
      })
      .catch(err => console.log(err))
  }

  render() {
    const containerStyle = {
      textAlign: 'center'
    }
    if (this.state.load) {
      return (
        <div style={containerStyle}>
          <h3>{this.state.title}</h3>
          <Search searching={this.searchList} submit={this.submitSearch} />
          <Sort ASC={this.sortAscending} DESC={this.sortDescending} Normal={this.originalList} />
          <List data={this.state.peopleList} />
        </div >
      )
    } else {
      return (
        <div className="loadingScreen">
          Loading...
        </div>
      )
    }
  }
}

export default App;
