import { useState } from 'react';
import './App.css';
import { BsPlusSquareFill } from "react-icons/bs";

function TodoList() {
  const [todoList, setTodoList] = useState([])
  console.log(todoList)
  function AddTodo(){
    setTodoList(["Rebeca", "Impaciente"])
  }
  function DisplayTodo(){
    for (let i in todoList) { 
      return <li>{todoList[i]}</li>
      }
  } 
return (
  <div>
    <form>
       <h1>TodoList</h1>
       <input type = "text"/>
  {/* <button className='data-testid="eval-add-todo-buttontem'>Add item</button> */}
  <BsPlusSquareFill className='data-testid="eval-add-todo-buttontem' onClick={AddTodo}/>
    </form>
    <ul>
     <DisplayTodo />
    </ul>
    <div data-testid="email">youremail@email.com</div>
  </div>

);


}

export default TodoList;