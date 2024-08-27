import './../App.css';

import MyHeader from '../components/header';
import MyUnderline from '../components/underline';
import Picture from '../components/BayesOpt.png';

function Projects() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Source Code Pro' rel='stylesheet'></link>

      <MyHeader />
      <MyUnderline />

      <p className="App-welcome">
        Bayesian Hyperparameter Optimization
      </p>

      <p className='App-text'>
        This is my attempt at implementing the <a rel='noreferrer' target='_blank' href='https://en.wikipedia.org/wiki/Bayesian_optimization' className='App-link'>Bayesian optimization</a> algorithm for the hyperparameter tuning of a Convolutional 
        Neural Network (CNN). Bayesian optimization is a technique suited for optimizing expensive-to-evaluate functions 
        which works by maximizing a probabilistic surrogate function based on Gaussian process regression. Essentially, we 
        query some black box function at a few key points, which allows us to construct a surrogate function with confidence bounds around where we believe 
        the true function lies. We can then employ an optimization heuristic (expected improvement, upper confidence bound, etc.) on 
        the surrogate function and query some new point which is likely to provide beneficial information. Bayesian optimization is well-suited 
        for optimizing neural network hyperparameters, since model training is a computationally costly task.
      </p>

      <img src={Picture} alt='Bayesian optimization in action' className='App-img'></img>

      <p className='App-text'>
        Reference material: <a rel='noreferrer' target='_blank' href='https://arxiv.org/abs/1807.02811' className='App-link'>https://arxiv.org/abs/1807.02811</a>
      </p>

      <p className='App-text'>
        GitHub link: <a rel='noreferrer' target='_blank' href='https://github.com/KimchiLim/Bayesian-Optimization' className='App-link'>https://github.com/KimchiLim/Bayesian-Optimization</a>
      </p>

    </div>
  );
}

export default Projects;
