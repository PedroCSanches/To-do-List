"use client"
import ListItem from '@/components/ListItem'
import React, {ChangeEvent, useState} from 'react'
import { IndexInfo } from 'typescript'


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

    function remove(index:number) {
      
      let tempArray = [...taskList] 
      tempArray.splice(index,1)

      setTaskList(tempArray)
    }

    function edit() {

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

            <div className='itemList'>
            <div className='done'><input type="checkbox"/></div>

            <div className='task'>{taskItem.task}</div>

            <div className='actions'>
            <button className='delete' onClick={() => remove(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 64 64">
                  <path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z"></path></svg>
                </button>
              <button className='edit' onClick={edit}>
                <img width="20" height="20" src="https://img.icons8.com/ios/50/paint.png" alt="paint"/>
                </button>
            </div>


            </div>



          
          )}



        </div>

      </div>

    </main>
  )
}
