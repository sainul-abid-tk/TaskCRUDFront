import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import TaskCard from '../components/TaskCard'
import { getAllTaskAPI } from '../Services/allAPi';
function Home() {
  const [allTask,setAllTask]=useState()
  const getAllTaskNotes=async()=>{
    try{
    const result=await getAllTaskAPI()
    if(result.status===200){
       setAllTask(result.data)
    }
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
  getAllTaskNotes()
  },[allTask])
  return (
    <div className='min-h-screen '>
    <div className='py-3 px-5 flex justify-end'>
    <Add/>
    </div>
    <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-between mt-5'>
     {allTask?.map((task,index)=>(
      <div className='p-3'>
        <TaskCard key={index} task={task}/>
      </div>
     )) }
    </div>
    </div>
    
  )
}

export default Home