import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ToDoList = (props) =>{

    return(
        <>
        <div className="todo_style">
            <DeleteForeverIcon className="fa-times"
            onClick={()=>{props.onSelect(props.id)}}/>
            <li>{props.task}</li>
        </div>
        </>
    )

}

export default ToDoList;