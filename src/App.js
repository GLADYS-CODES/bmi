
import React, {useState} from 'react';
import './index.css';



function App() {


// state

const [weight, setWeight] = useState(0);
const [height, setHeight] = useState(0);
const [bmi, setBmi] = useState('');
const [message, setMessage] = useState('');




// image based on bmi

let imgSrc = '';
 if (bmi < 1) {

imgSrc = null;


 } else {
  if (bmi < 25) {
    imgSrc = require('../src/assets/underweight.png');

  } else if (bmi >= 25 && bmi < 30) {
    imgSrc = require('../src/assets/healthy.png');

  } else {
    imgSrc = require('../src/assets/overweight.png');
  }
}
let calcBmi = (event) => {

  // prevent default form submission
  event.preventDefault();


  //conditonals
  if (weight === 0 || height === 0 ) {
    alert('Please enter a value');
  } else {

    let bmi = (weight / (height * height) * 703);

    setBmi(bmi.toFixed(1));
  




// message


if (bmi < 25)  {

  setMessage('You are underweight');
}else if (bmi >= 25 && bmi < 30) {

  setMessage('You are normal');
}  else {
  setMessage('You are overweight');
}

}
}
// reload

let reload = () => {
  window.location.reload();

}


  return (
 
<div className="App">

<div className="container">
<h2 className="center">BMI Calculator</h2>

<form onSubmit={calcBmi}>
  <div>
  <label>Weight (lbs)</label>
  <input value={weight} onChange={(event)  => setWeight(event.target.value)} />
</div>
<div>
  <label>Height (in)</label>
  <input value={height} onChange={(event) => setHeight(event.target.value)} />
</div>
<div>
  <button className='btn' type='submit'>Submit</button>
  <button className='btn btn-outline' onClick={reload}type='submit'>Reload</button>
</div>

</form>
<div className='center'>
  <h3> Your BMI is: {bmi}</h3>
  <p>{message}</p>
  </div>
  <div className='img-container'>
    <img src={imgSrc} alt=''></img>

  </div>

</div>
</div>
  );
}

export default App;