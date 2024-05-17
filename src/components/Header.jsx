import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='px-4 py-4 bg-blue-500'>
   <Link className='flex  items-center ' to={'/'}>
        <AssignmentIcon fontSize='large'/>
        <h4 className='text-2xl font-bold italic'>Task<span className='text-white italic'>Hub</span></h4>
        </Link>
    </div>
  )
}

export default Header