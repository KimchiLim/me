import './../App.css';

import MyHeader from './../components/header';
import MyUnderline from './../components/underline';

function Home() {
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
        continuing my studies with the help of <a rel='noreferrer' target='_blank' className='App-link' href="https://careeradvancement.uchicago.edu/student-opportunities/one-and-multi-year-programs/uchicago-advanced-scholars-4-1-masters-programs/">UChicago's Advanced Scholar's grant</a>, 
        which allows me to return to school for a partially-funded fifth year of education. During this 
        time, I'll be working towards a Master's degree in Computer Science.
      </p>

      <p className="App-text">
        I'm broadly interested in the ways in which computers and mathematics intersect. My focus is 
        primarily in the domain of machine learning, but I find there to be hints (or more than hints) of mathematical aesthetic 
        in a variety of fields, such as cryptography, database design, and computer networks. I find them all interesting!
      </p>

      <p className="App-text">
        On the side, I enjoy tennis, badminton, running (slowly), bouldering (badly), and playing tetris (freqently). 
        I also enjoy reading science fiction and am always open to new recommendations! Currently reading: 
        <em> The Fall of Hyperion</em> by Dan Simmons.
      </p>

      <p className="App-text">
        Thanks for taking the time to get to know me! If you want to chat, you can reach me via <a rel='noreferrer' target='_blank' href="mailto: kevin.lim6459@gmail.com" className="App-link">email</a>.
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

export default Home;
