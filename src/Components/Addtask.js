import React, { Component } from 'react'
import Tasklists from './Tasklists'

class Addtask extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: "",
             todoItemsArr: []
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.deleteElement = this.deleteElement.bind(this)
        this.taskCompleteToggle = this.taskCompleteToggle.bind(this)
    }

    onChangeHandler(e){
        this.setState({
            value: e.target.value
        })
    }
    
    onSubmitHandler(e){
        e.preventDefault();
        if(this.state.value === "") return;
        const newItem = {
            value: this.state.value,
            isCompleted: false,
            key: Date.now()
        }
        this.state.todoItemsArr.push(newItem)
        this.setState({
            value: ""
        })
    }

    deleteElement(key){

        var updatedTodoItemsArr = this.state.todoItemsArr.filter(item => item.key !== key)
        this.setState({
            todoItemsArr: updatedTodoItemsArr
        })
    }

    taskCompleteToggle(key){
        const updatedTodoItemsArr = this.state.todoItemsArr.map(item => {
            if(item.key === key){
                const updatedTask = {
                    ...item,
                    isCompleted: !item.isCompleted
                }
                return updatedTask
            }
            return item
        })

        this.setState({
            todoItemsArr: updatedTodoItemsArr
        })
    }
    render() {
        return (
            <>
            <form className="add-task" onSubmit={this.onSubmitHandler}>
                <input autoFocus className="add-task_input-field" placeholder="New task..." value={this.state.value} onChange={this.onChangeHandler}/>
                <button className="add-task_submit-btn">Add task</button>
            </form>
            <Tasklists todoItemsArr={this.state.todoItemsArr} deleteElement={this.deleteElement} taskCompleteToggle={this.taskCompleteToggle}/>
            </>
        )
    }
}

export default Addtask
