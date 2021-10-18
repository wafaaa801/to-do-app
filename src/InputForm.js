import React, { useState } from 'react';
import {
  InputGroup,
  FormControl,
  Button,
  Form,
} from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'; 

function InputForm({addToList}) {
    const [task, setTask] = useState("");

    const handleSubmit = e => {
      e.preventDefault(); // to prevent page from reloading when user press enter
      if(!task) return;
      addToList(task);
      setTask("");
    }

    return(
      // Because InputGroup from React bootstrap doesn't have an onsubmit event,
      // so we wrap it in <Form /> component to enable the 
      // handleSubmit function
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            value={task}
            placeholder="Enter your task"
            aria-label="Enter your task"
            aria-describedby="basic-addon1"
            onChange={e => setTask(e.target.value)}
            
          />
          <Button className="btn btn-primary btn-large centerButton" type="submit"><FaPlus/></Button>
        </InputGroup>
      </Form>
    )
}

export default InputForm;