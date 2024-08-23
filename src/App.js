import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/education';

const home = "/react-gh-pages";

function App() {
  return (
    <Router>
      <div>
        {/*
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>*/}

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={home + "/education"} element={<About />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
/*
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Source Code Pro' rel='stylesheet'></link>

      <MyHeader />
      <MyUnderline />

      <p className="App-welcome">
        Hi, I'm Kevin.
      </p>

      <p className="App-text">
        Nice to meet you! I'm a recent graduate of the <a rel='noreferrer' target='_blank' className='App-link' href="https://www.uchicago.edu/en">
        University of Chicago</a>, where I majored in Mathematics and Computer Science. I'm 
        continuing my studies with the help of UChicago's <a rel='noreferrer' target='_blank' className='App-link' href="https://careeradvancement.uchicago.edu/student-opportunities/one-and-multi-year-programs/uchicago-advanced-scholars-4-1-masters-programs/">Advanced Scholar's grant</a>, 
        which allows me to return to school for a partially-funded fifth year of education. During this 
        time, I will be working towards a Master's degree in Computer Science.
      </p>

      <p className="App-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/