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
        <li className="App-text">Other classes I enjoyed taking were <em>Cancer Biology</em>, <em>Philosophical Perspectives</em>, and <em>Fundamentals of Creative Writing</em>.</li>
      </ul>

      <p className="App-welcome">
        Teaching / Research
      </p>

      <p className="App-text">
        As an undergradate, I've had the opportunity to work as both a teaching assistant and research assistant. 
      </p>

      <ul>
        <li className="App-text">During my senior year I worked as a teaching assistant for two courses: <em>Fundamental Mathematics</em> and <em>Mathematical Methods for the Physical Sciences</em>. 
        Each of these roles required ~10 hours a week of hosting office hours, attending tutorials, and grading.</li>
        <li className="App-text">I've been fortunate to work under professor <a rel="noreferrer" target='_blank' href='https://www.haifeng-xu.com/' className='App-link'>Haifeng Xu</a> of 
        the <a rel='noreferrer' target='_blank' href='https://www.haifeng-xu.com/sigma/' className='App-link'>SIGMA Research Lab</a>, who focuses on the development 
        of novel learning algorithms for strategic environments. As a research assistant, I studied reinforcement learning and discrete optimization. Work 
        I did on developing integer linear programs for certain games appeared in <a rel='noreferrer' target='_blank' href='https://arxiv.org/pdf/2407.20981' className='App-link'>this paper</a> published in <a rel='noreferrer' target='_blank' href='https://www.ecai2024.eu/' className='App-link'>ECAI 2024</a>.</li>
      </ul>
    </div>
  );
}

export default Education;
