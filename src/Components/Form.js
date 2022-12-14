import React ,{useState}from "react";
import TodoList from "./TodoList";
import { useSelector,useDispatch } from "react-redux";
import{addItem} from '../reduxStore/Reducer/todoListSlicer'


export default function Form( ) 
{
  const dispatch=useDispatch();

  const[id, setId] = useState(0);
 
  const submitForm=(event)=>
  {
    event.preventDefault();
    let x=event.target;
    
    let newTodoItem={
      id:id,
      title:x[0].value,
     
    }
    dispatch(addItem(newTodoItem))
    setId(id+1);
 
    
   
}
  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter TOdo...."
          className="task-input"
          required
        
        />
        <button className="button-add" type="sumbit"  >
          Add 
        </button>
        <div>
    
        </div>
      
      </form>
      <TodoList/>

    </>
  );
}
