import React,{useState} from 'react';
import "./App.css";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from './components/FormTodo/formtodo';
import Todo from './components/ToDo/todo';

const App = ()=> {
  const [todos, setTodos] = useState([
    {
      text: "",
      isDone: false
    }
  ]);

  const addTodo = text => {
    console.log("addTodo");
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    console.log("markTodo");
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    console.log("remove todo");
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  const deleteAll =()=>{
    console.log("delete All");
    const newTodos=[...todos];
    for (var x in newTodos) {
      newTodos[x].text="";
    }
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4" style={{color:"white"}}> Todo List</h1>
        <FormTodo  addTodo={addTodo} deleteAll={deleteAll} />
        <div>
          {todos.map((todo, index) => (
           todo.text ===""?null:
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;