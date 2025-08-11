import { useState } from "react";
import { v4 as uuid } from "uuid";

let s = {
    display:"flex", 
}

export default function ToDo(){
    let [Task,SetTask] = useState([{task : "Sample", id: uuid(), done: false}]);
    let [NewTask,SetNewTask] = useState(""); 

    let addTask = () => {
        SetTask([...Task, {task: NewTask, id: uuid(), done: false}]);
        SetNewTask("");
    }

    let updateTask = (event) => {
        SetNewTask(event.target.value);
    }

    let del = (id) => {
        SetTask(Task.filter((todo) => todo.id !== id));
    }

    let delAll = () => {
        SetTask([]);
    }

    let upperAll = () => {
        SetTask(Task.map((todo)=>{
            return{
                ...todo,
                task: todo.task.toUpperCase()
            }
        }))
    }

    let update = (id) => {
        SetTask(Task.map((todo)=>{
            if (todo.id === id){
            return{
                ...todo,
                task: todo.task.toUpperCase()
            }
            }else{
                return todo;
            }
        }))
    }

    let markAsDone = (id) => {
        SetTask(Task.map((todo)=>{
            if (todo.id === id){
            return{
                ...todo,
                done: true
            }
            }else{
                return todo;
            }
        }))
    }

    return(
        <div>
            <h2>TO DO LIST</h2>
            <input placeholder="Add new Task" onChange={updateTask} value={NewTask}></input>&nbsp; &nbsp;
            <button onClick={addTask}>ADD</button>
            <ul>
                {
                    Task.map((todo) => (
                            <li key={todo.id}>
                                <span style={{textDecoration: todo.done ? "line-through" : "none"}}>{todo.task}</span>
                                <button onClick={() => del(todo.id)}>Delete</button>
                                <button onClick={() => update(todo.id)}>Update</button>
                                <button onClick={() => markAsDone(todo.id)}>Done</button>
                                <br />
                                &nbsp;
                            </li>
                    ))
                }
                
            </ul>
            <button onClick={delAll}>Delete All</button>
            <button onClick={upperAll}>UpperCase All</button>
        </div>
    )
} 