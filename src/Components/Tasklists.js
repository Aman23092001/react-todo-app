import React, { Component } from 'react'
import FlipMove from "react-flip-move"

class Tasklists extends Component {
    
    
    deleteTask = (key) => {
        this.props.deleteElement(key)
    }

    taskCompleteToggle = (key) => {
        this.props.taskCompleteToggle(key);

    }

    
    render() {
        const {todoItemsArr} = this.props
        const listItems = todoItemsArr.map(element => 
        <li 
            id = {element.key} 
            className="tasklists_list"
            key={element.key}>
                <span onClick={() => this.taskCompleteToggle(element.key)}className={element.isCompleted ? "tasklists_list_task completed" : "tasklists_list_task"}>{element.value}</span>
                {<i onClick={() => this.deleteTask(element.key)} className="fas fa-times"></i>}
        </li>)


        return (
            <ul className="tasklists">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        )
    }
}

export default Tasklists
