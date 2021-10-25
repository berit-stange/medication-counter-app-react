import React, { useState } from 'react';
import './App.css';

function App() {

  //DATE
  const date = new Date();
  const month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  let name = month[date.getMonth()];
  const displayTodaysDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

  // BUTTONS
  // const btn = document.querySelector('.btn-morning');
  // const changeColor = document.querySelector(".changeColor");
  // changeColor.addEventListener('click', function () {
  //   btn.classList.toggle("change");
  // });
  const [switchToggled, setSwitchToggled] = useState(false);
  const toggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    console.log(switchToggled);
    alert('Tablette morgens ist eingeworfen');
  };

  const [switchToggled2, setSwitchToggled2] = useState(false);
  const toggleSwitch2 = () => {
    switchToggled2 ? setSwitchToggled2(false) : setSwitchToggled2(true);
    console.log(switchToggled2);
    alert('Tablette mittags ist eingeworfen');
  };

  const [switchToggled3, setSwitchToggled3] = useState(false);
  const toggleSwitch3 = () => {
    switchToggled3 ? setSwitchToggled3(false) : setSwitchToggled3(true);
    console.log(switchToggled3);
    alert('Tablette abends ist eingeworfen');
  };

  // const clickHandlerMo = () => {
  //   console.log('clicked mittags');
  //   alert('clicked morgens');
  // };

  // const [toggle, setToggle] = useState(true);


  return (
    <div>
      <h1 className="title">Medi App</h1>
      <p>(no data storage yet)</p>

      <div className="container">
        <div className="date-container">
          <p>{displayTodaysDate}</p>
        </div>

        <div className="btn-container">
          {/* <button onClick={clickHandlerMo}>mo</button> */}
          <button className={switchToggled ? "changeColor" : ""} onClick={toggleSwitch}>mo</button>
          {/* <button onClick={() => setToggle(!toggle)}>mo</button> */}
          {/* <button onClick={clickHandlerMi}>mi</button> */}
          <button className={switchToggled2 ? "changeColor" : ""} onClick={toggleSwitch2}>mi</button>
          {/* <button onClick={clickHandlerAb}>ab</button> */}
          <button className={switchToggled3 ? "changeColor" : ""} onClick={toggleSwitch3}>ab</button>
        </div>
      </div>
    </div>
  );
}

export default App;
