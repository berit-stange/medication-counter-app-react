import React from 'react';
import './App.css';

function App() {

  //DATE
  const date = new Date();
  // console.log(date.toString());
  // document.getElementById("date").innerHTML = date;
  const displayTodaysDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

  // BUTTONS
  // const btn = document.querySelector('.btn-morning');
  // const changeColor = document.querySelector(".changeColor");
  // changeColor.addEventListener('click', function () {
  //   btn.classList.toggle("change");
  // });
  const clickHandlerMo = () => {
    console.log('clicked morgens');
    alert('clicked morgens');
  };

  const clickHandlerMi = () => {
    console.log('clicked mittags');
    alert('clicked morgens');
  };

  const clickHandlerAb = () => {
    console.log('clicked abends');
    alert('clicked morgens');
  };

  // const btn2 = document.querySelector('.btn-noon');
  // const changeColor2 = document.querySelector(".changeColor2");
  // changeColor2.addEventListener('click', function () {
  //   btn2.classList.toggle("change");
  // });

  // const btn3 = document.querySelector('.btn-night');
  // const changeColor3 = document.querySelector(".changeColor3");
  // changeColor3.addEventListener('click', function () {
  //   btn3.classList.toggle("change");
  // });

  return (
    <div>
      <h1 className="title">Medi App</h1>
      <p>(no data storage yet)</p>

      <div className="container">
        <div className="date-container">
          <p>{displayTodaysDate}</p>
        </div>

        <div className="btn-container">
          <button onClick={clickHandlerMo}>mo</button>
          <button onClick={clickHandlerMi}>mi</button>
          <button onClick={clickHandlerAb}>ab</button>
        </div>
      </div>
    </div>
  );
}

export default App;
