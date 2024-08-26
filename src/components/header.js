import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Resume from "./Resume.pdf";

const linkStyle = {
    fontFamily: 'Roboto Mono, sans-serif',
    textDecoration: 'none',
    color: 'black',
    margin: '0 15px 0 0',
    };
    
export default class MyHeader extends Component {
    render() {
        return (
            <header style={{ padding: '10px 20px 10px 20px', textAlign: 'left', fontFamily: 'Roboto Mono, sans-serif' }}>
              <h1 style={{ marginLeft: 'calc(15%)', marginBottom: '10px', fontSize: '60px'}}><Link to="/" className='App-title'>KEVIN LIM</Link></h1>
              <nav className="App-nav" style={{ marginLeft: 'calc(15.25%)'}}>
                <a href={Resume} rel='noreferrer' target='_blank' style={linkStyle}>Resume</a>
                <Link to="/projects" style={linkStyle}>Projects</Link>
                <Link to="/education" style={linkStyle}>Education</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
              </nav>
            </header>
          );
    }
}