import './App.css';
import React, { useState } from 'react';
import {
  Card,
  InputGroup,
  FormControl,
  Button,
  Form,
  ToggleButton,
  ButtonGroup
} from 'react-bootstrap';
import { FaCheck, FaTrashAlt, FaPlus } from 'react-icons/fa';

function App() {
  
  const [todo, setTodo] = useState([
    { text: "Grab a coffee", isDone: false },
    { text: "Learn about React Bootstrap", isDone: false },
    { text: "Build really cool todo app", isDone: false },
    { text: "Submit todo app to Ever AI Technologies", isDone: false }
  ]);

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
  // add new item into the todo array
  const addToList = text => {
    const newList = [...todo, {text}];
    setTodo(newList);
  }

  // remove an item from the todo array
  const removeFromList = index => {
    const newList = [...todo];
    newList.splice(index, 1);
    setTodo(newList);
  }

  // update status of completion of a task in the list
  const updateDone = index => {
    const newList = [...todo];
    newList[index].isDone = true;
    setTodo(newList);
    console.log(todo.isDone)
  }

  function ToDo({ todo, index, removeFromList, updateDone }) {
    return(
      <InputGroup className="mb-3">
        <FormControl
          readOnly
          placeholder={todo.text}
          aria-label={todo.text}
          aria-describedby="basic-addon1"
          style={{ textDecoration: todo.isDone ? "line-through" : "" }}
        />
        <ButtonGroup>
        <ToggleButton 
          variant="success"
          onClick={() => updateDone(index)}
          style={{ backgroundColor: todo.isDone ? 'grey' : '', color: "white"}}><FaCheck />
        </ToggleButton>
        </ButtonGroup>
        <Button className="btn btn-danger btn-large centerButton" onClick={() => removeFromList(index)}><FaTrashAlt /></Button>
      </InputGroup>
    )
  }

  return (
    <Card border="primary" style={{ width: '60%', marginLeft: '250px', marginTop: 15 }}>
    <Card.Header style={{ textAlign: 'center', fontWeight: 'bold' }}>My To-Do App</Card.Header>
    <Card.Body>
      <Card.Title>To-Do List</Card.Title>
      <InputForm addToList={addToList} />
      {
        todo.map((todo, index) => {
          return(
            <ToDo
              key={index}
              index={index}
              todo={todo}
              removeFromList={removeFromList}
              updateDone={updateDone}
            />
          )
        })
      }
      <Card.Title>Total completed task: {updateDone.length}</Card.Title>
    </Card.Body>
  </Card>
  );
}

export default App;
