import './../App.css';

import MyHeader from '../components/header';
import MyUnderline from '../components/underline';

function LIS() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Source Code Pro' rel='stylesheet'></link>

      <MyHeader />
      <MyUnderline />

      <p className='App-welcome'>Longest Increasing Subsequence (LIS)</p>

      <p className="App-text">
        Given an array A of integers, a subseqence of A is any sequence of integers which can 
        be obtained from A by the deletion of zero or more elements. In other words, a subsequence 
        of A is any sequence of the form A[i<sub>1</sub>], A[i<sub>2</sub>] ... A[i<sub>k</sub>] 
        where i<sub>1</sub> &lt; i<sub>2</sub> &lt; ... &lt; i<sub>k</sub>. 
        Furthermore, a subsequence A[i<sub>1</sub>], A[i<sub>2</sub>] ... A[i<sub>k</sub>] is 
        itself strictly increasing if A[i<sub>1</sub>] &lt; A[i<sub>2</sub>] &lt; ... &lt; A[i<sub>k</sub>].
        Given this terminology, the Longest Increasing Subsequece (LIS) problem can be stated as 
        follows: Given an array A of integers, return the length of the longest strictly increasing 
        subsequence of A.
      </p>
    </div>
  );
}

export default LIS;
