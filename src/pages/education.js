import './../App.css';

import MyHeader from '../components/header';
import MyUnderline from '../components/underline';

function Education() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Source Code Pro' rel='stylesheet'></link>

      <MyHeader />
      <MyUnderline />

      <p className="App-welcome">
        Coursework
      </p>

      <p className="App-text">
        As a result of the University of Chicago's <a className="App-link" target="_blank" href='https://college.uchicago.edu/academics/core-curriculum' rel='noreferrer'>core curriculum</a> as 
        well as my choice to pursue two majors, I have taken a wide array of coursework across a variety of 
        different fields. Here are some of my favourites:
      </p>

      <ul>
        <li className="App-text">In computer science, I enjoyed taking <em>Complexity Theory</em>, <em>Machine Learning</em>, and <em>Computer Networks</em>.</li>
        <li className="App-text">In mathematics, my favourite courses were <em>Real Analysis</em>, <em>Abstract Algebra</em>, and <em>Mathematical Probability</em>.</li>
        <li className="App-text">Other classes I enjoyed taking were <em>Cancer Biology</em>, <em>Philosophical Perspectives</em>, and <em>Intro to Creative Writing</em>.</li>
      </ul>

      <p className="App-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

        {/*
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
      */}
      
    </div>
  );
}

export default Education;
