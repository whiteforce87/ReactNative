import React, { useState } from "react";
import "./NewGoal.css";


const NewGoal = (props) => {

    const [userInput,setInput] = useState("");

const addGoalHandler = (event) =>{
    event.preventDefault();

    const newGoal = {
        text:userInput
    }
    props.onAddGoal(newGoal);
    setInput("");
}

const textChangeHandler = (event) =>{
    setInput(event.target.value);
}

    return <form className="newGoal" onSubmit={addGoalHandler}>
        <input type="text" value = {userInput} onChange={textChangeHandler}></input>
        <button type="submit">Add Goal</button>
    </form>
};

export default NewGoal;