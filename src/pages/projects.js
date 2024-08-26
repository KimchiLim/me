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
        Projects
      </p>

      <p className='App-text'>
        This page is a work in progress
      </p>

    </div>
  );
}

export default Education;
