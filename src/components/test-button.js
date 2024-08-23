import React, { Component } from 'react';

/*
export default class MyButton extends Component {
    render() {
        return (
            <button>
                I'm a button!
            </button>
        );
    }
} */

const linkStyle = {
    fontFamily: 'Inter, sans-serif',
    textDecoration: 'none',
    color: 'black',
    margin: '0 15px',
    };

export default class MyHeader extends Component {
    render() {
        return (
            <header style={{ padding: '20px', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
              <h1 style={{ marginBottom: '10px' }}>Your Name</h1>
              <nav>
                <a href="/resume" style={linkStyle}>Resume</a>
                <a href="/projects" style={linkStyle}>Projects</a>
                <a href="/contact" style={linkStyle}>Contact</a>
              </nav>
            </header>
          );
    }
}