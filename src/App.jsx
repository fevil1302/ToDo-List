import React, { useState } from 'react';
import ToDoList from './ToDoList';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [inputTask, setInputTask] = useState();
    const [tasks,setTasks] = useState([]);

    
    const updateList=(event)=>{
        setInputTask(event.target.value);
    }
    const addTask=()=>{
        setTasks((oldVal)=>{
            return[...oldVal,inputTask]
        });
        setInputTask("");
    }

    const deleteTask = (id) =>{
        setTasks((oldTasks)=>{
            return oldTasks.filter((arrElem,index)=>{
                return index !== id;
            });
        })
    }

    return(
    <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input 
                    type="text" 
                    onChange={updateList}
                    placeholder="Add a Task"
                    value={inputTask}
                />  
                {/* <Button className="Newbutton" onClick={addTask}>
                    <AddIcon />
                </Button>               */}
                <button type="button" className="btn btn-success" onClick={addTask}><AddIcon /></button>
                <ol>
                    {
                        tasks.map((tsk,index)=>{
                            return <ToDoList task={tsk}
                                key={index}
                                id={index}
                                onSelect={deleteTask}
                            />
                        })
                    }
                </ol>
            </div>
        </div> 
    </>
    )
}

export default App;