import React from 'react';
import { Button } from 'react-bootstrap';

const Todo= ({ todo, index, markTodo, removeTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>Done</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>Delete</Button>
      </div>
    </div>
  );
}

export default Todo;