import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { updateTaskAPI } from '../Services/allAPi';
function Edit({editTask}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [task,setTask]=useState({
    taskName:editTask?.taskName,
    taskNotes:editTask?.taskNotes
  })
  const handleUpdateTask=async()=>{
    const {taskName,taskNotes}=task
    if(!taskName || !taskNotes){
      alert('Please fill the form completely...')
    }else{
      try{
        const result=await updateTaskAPI(editTask?.id,task)
        console.log(result);
        if(result.status===200){
         alert('Task updated successfully...')
         handleClose()
        }else{
         alert('error')
        }
       }catch(err){
         console.log(err);
       }
    }
    
  }
  return (
    <div>
      <Button size="small" onClick={handleOpen} className='cursor-pointer'><ModeEditIcon fontSize='medium' /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4 className='text-center font-bold text-2xl'>
           Edit Task!!!
          </h4>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form action="" className='space-y-3'>
            <TextField value={task.taskName} onChange={(e)=>setTask({...task,taskName:e.target.value})}  style={{width:'350px'}} id="outlined-basic" label="Enter task name" variant='outlined' />
            <TextField
            value={task.taskNotes}
            onChange={(e)=>setTask({...task,taskNotes:e.target.value})} 
            style={{width:'350px'}}
          id="outlined-multiline-static"
          label="Enter task notes..."
          multiline
          rows={4}
        />
        <div className='flex justify-between px-2'>
          <Button onClick={handleClose} variant='contained' color='error'>Cancel</Button>
          <Button onClick={handleUpdateTask} variant='contained' color='success'>Save</Button>
        </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit