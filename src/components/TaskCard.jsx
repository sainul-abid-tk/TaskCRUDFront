import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from './Edit';
import { deleteTaskAPI } from '../Services/allAPi';
function TaskCard({task}) {

  const handleDelete=async()=>{
    try{
     const result=await deleteTaskAPI(task?.id)
     if(result.status===200){
      alert('Task deleted Successfullyy...')
     }else{
      alert('error')
     }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <Card sx={{ minWidth: 275 ,minHeight:180}} style={{background:'black',color:'white',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,fontWeight:'bold' }}  className='text-center' gutterBottom>
          {task?.taskName}
        </Typography>
        <Typography variant="body2">
          {task?.taskNotes}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between '>
        <Edit editTask={task}/>
        <Button onClick={handleDelete} size="small"><DeleteIcon color='error' fontSize='medium'/></Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default TaskCard