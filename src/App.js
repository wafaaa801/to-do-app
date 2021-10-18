import './App.css';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import InputForm from './InputForm';
import ToDo from './Todo';

function App() {
  
  const [todo, setTodo] = useState([
    { id: 1, task: "Grab a coffee", isDone: false },
    { id: 2, task: "Learn about React Bootstrap", isDone: false },
    { id: 3, task: "Build really cool todo app", isDone: false },
    { id: 4, task: "Submit todo app to Ever AI Technologies", isDone: false }
  ]);

  // add new item into the todo array
  const addToList = text => {
    const newList = [...todo, {id: todo.length + 1, task: text, isDone: false}];
    setTodo(newList);
  }

  // remove an item from the todo array
  const removeFromList = index => {
    const newList = [...todo];
    newList.splice(index, 1);
    setTodo(newList);
  }

  // update status of completion of a task in the list
  const updateDone = (id) => {
    let mapped = todo.map(task => {
      return task.id === Number(id) ? { ...task, isDone: !task.isDone } : { ...task};
    });
    setTodo(mapped);
  };

  // to count the number of completed task; isDone == true
  const completeCount = () => {
    var numCompleted = todo.reduce(function(count, item) {
      return count + (item["isDone"] === true ? 1 : 0);
    }, 0);
    return numCompleted;
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
      <Card.Title style={{ textAlign: 'right', fontSize: 12 }}>Total number of task completed: {completeCount()}</Card.Title>
    </Card.Body>
  </Card>
  );
}

export default App;
