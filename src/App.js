// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News pagesize='15'></News>
      </div>
    )
  }
}

