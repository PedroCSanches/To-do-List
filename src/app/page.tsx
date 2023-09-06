"use client"
import ListItem from '@/components/ListItem'
import React, {ChangeEvent, useState} from 'react'


type taskType = {
  done: boolean
  task: string
}
export default function Home() {
    const [task , setTask] = useState("")
    const[taskList, setTaskList] = useState<Array<taskType>>([])



    function saveTask(inputElement: ChangeEvent<HTMLInputElement>){
          setTask(inputElement.target.value)
    }


    function addTask() {
      taskList.push({
        done:false,
        task:task
      })
      setTaskList([...taskList])
      setTask("")
    }


  return (
    <main>


      <div className='container'>

          <h1>To Do List</h1>
        <div>
           <input className='txtask' type='text' value={task} onChange={saveTask}/> 
           <button className='addButton' onClick={addTask}>+</button>
           
         </div>

        <div className='taskList'>

          <div className='topList'>
            <div className='doneTitle'>Done</div>
            <div className='taskTitle'>Task</div>
            <div className='actionsTitle'>Actions</div>
          </div>


        {taskList.map((taskItem,index) =>

          <ListItem  task={taskItem.task} done={taskItem.done}/>
          )}



        </div>

      </div>

    </main>
  )
}
