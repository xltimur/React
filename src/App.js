import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lesson2 from  './Lesson2'


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>хочу кофе</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
                <Lesson2/>
            </div>
        );
    }
}

export default App;
