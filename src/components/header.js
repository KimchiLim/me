import React, { Component } from 'react';

const linkStyle = {
    fontFamily: 'Roboto Mono, sans-serif',
    textDecoration: 'none',
    color: 'black',
    margin: '0 15px 0 0',
    };

const home = "/react-gh-pages";

export default class MyHeader extends Component {
    render() {
        return (
            <header style={{ padding: '10px 20px 10px 20px', textAlign: 'left', fontFamily: 'Roboto Mono, sans-serif' }}>
              <h1 style={{ marginLeft: 'calc(15%)', marginBottom: '10px', fontSize: '60px'}}><a href={home} className='App-title'>KEVIN LIM</a></h1>
              <nav className="App-nav" style={{ marginLeft: 'calc(15.25%)'}}>
                <a href="/resume" style={linkStyle}>Resume</a>
                <a href="/projects" style={linkStyle}>Projects</a>
                <a href={home + "/education"} style={linkStyle}>Education</a>
                <a href="/contact" style={linkStyle}>Contact</a>
              </nav>
            </header>
          );
    }
}