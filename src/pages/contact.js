import './../App.css';

import MyHeader from '../components/header';
import MyUnderline from '../components/underline';

function Contact() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Source Code Pro' rel='stylesheet'></link>

      <MyHeader />
      <MyUnderline />

      <p className='App-welcome'>Contact Info</p>

      <p className="App-text">
        I'm easiest to reach via <a rel='noreferrer' target='_blank' href="mailto: kevin.lim6459@gmail.com" className="App-link">email</a>. 
        Alternatively, you can connect with me on <a rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/kevin-lim-0742431a7/" className="App-link">LinkedIn</a>.
      </p>
    </div>
  );
}

export default Contact;
