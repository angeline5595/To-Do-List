import React,{useState} from 'react';
import { Form,Button} from 'react-bootstrap';

const FormTodo= ({ addTodo ,deleteAll}) => 
{
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
  
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label style={{color:"white"}}><h3>Add Todo</h3></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" size="lg" style={{width:"150px"}}type="submit">
        Submit
      </Button>
      <Button variant="primary mb-3 ml-3" size="lg" style={{width:"150px"}}type="submit" onClick={deleteAll}>
        Delete All
      </Button>
    </Form>
    
  );
}

export default FormTodo;