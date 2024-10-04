import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewGoal from './NewGoals/NewGoal';
import { useState } from 'react';

function App() {
  const goals = [{text:"abc"},{text:"def"}]
  const goals2 = ["hij","man"]

  const [myGoals, setGoals] = useState(goals);

const addNewGoalHandler = (newGoal) =>{
  
  //setGoals(myGoals.concat(newGoal));
  setGoals((prevMyGoals) => {
    return prevMyGoals.concat(newGoal);
  })
  console.log(myGoals)
}
  return (

   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NewGoal onAddGoal = {addNewGoalHandler} ></NewGoal>

        <ul>  
          <li>{myGoals[0].text}</li>
         </ul>
         <ul>{
          myGoals.map((goal) => {
            return(
            <li key={goal.id}>{goal.text}</li>
            )
          })
        }</ul>
        <ul>{
          goals2.map((goal) => {
            return(
            <li key={goal.id}>{goal}</li>
            )
          })
        }</ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="container">
      <div className="box flex1">flex: 1</div>
      <div className="box flex1">flex: 1</div>
      <div className="box flex1">flex: 1</div>
      <div className="box flex2">flex: 2</div>
      <div className="box flex3">flex: 3</div>
    </div>
      </header>
    </div>
  );
}

//class App1 extends React.Component{
 // render(){
   // return <h1>sdasda</h1>
 // }
//}

export default App;
