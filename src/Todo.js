import React from 'react';
import {
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';

function ToDo({ todo, index, removeFromList, updateDone }) {
    
    return(
      <InputGroup className="mb-3">
        <FormControl
          readOnly
          placeholder={todo.task}
          aria-label={todo.task}
          aria-describedby="basic-addon1"
          style={{ textDecoration: todo.isDone ? "line-through" : "" }}
        />
        <Button 
          variant="success"
          onClick={() => updateDone(todo.id)}
          style={{ backgroundColor: todo.isDone ? 'grey' : '', color: "white"}}><FaCheck />
        </Button>
        <Button className="btn btn-danger btn-large centerButton" onClick={() => removeFromList(index)}><FaTrashAlt /></Button>
      </InputGroup>
    )
}

export default ToDo;