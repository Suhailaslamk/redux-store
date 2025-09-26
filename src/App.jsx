import React,{useState} from 'react'
import './App.css'

function App(){
const [tasks,setTasks]=useState([])
const [newTask,setNewTask]=useState("")

const handleinputchange=((e)=>{
  setNewTask(e.target.value)
})
const  addElement=(()=> {
  setTasks([...tasks,newTask])
  setNewTask("")
  
})
const deleteElement=((index)=> {
  const updatedTask=tasks.filter((_,i)=> i!== index)
 setTasks(updatedTask)
})

return (
  <div className="to-do-list">
    <h1>To-Do-List</h1>
    <input type='text' placeholder='Enter your thougt.....' value={newTask} onChange={handleinputchange}/>
    <button className="add-button" onClick={addElement}>Add</button>
    <ol>
       
      {tasks.map((task,index)=> <li key={index}>{task}
         <button  className="delete-btn" onClick={()=> deleteElement(index)}>Delete</button>
      </li> 
     )}
    </ol>
   
  </div>
  
)

}
export default App


