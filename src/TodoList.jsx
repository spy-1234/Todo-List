import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodo) => {
      //callback is a good practice as a developer for execution
      return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false}]; //due to synchronization
    });
    setNewTodo("");
  };

  let updateTodoTask = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id)=> {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id != id))
  }

  let markAsDone = (id) => {  // mark as done one byy one
    setTodos((prevtodo) => {
      return prevtodo.map((todo) => {
        if(todo.id === id) {
          return{
            ...todo, 
            isDone: true,
          }
        }
        else {
          return todo
        }
      })
    })
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        placeholder="Add a Task"
        value={newTodo}
        onChange={updateTodoTask}
      />
      <br /> &nbsp;
      <button onClick={addNewTask} style={{border: "2px solid firebrick", backgroundColor: "pink"}}>
        Add Task
      </button>
      <br />
      <hr />
      <ul>
        {todos.map((todo) => {
          return<li key={todo.id}>
            <span style={ todo.isDone ? {textDecorationLine: "line-through"} : {}}>
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button style={{border: "2px solid firebrick", backgroundColor: "gold", cursor: "pointer"}} onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
            <button onClick={() => markAsDone(todo.id)} style={{border: "2px solid firebrick", backgroundColor: "greenyellow", cursor: "pointer"}}>Mark as Done</button>
          </li>;
        })}
      </ul>
    </div>
  );
}
