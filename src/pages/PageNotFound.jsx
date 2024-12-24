import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    let navigate=useNavigate()
  return (
    <div className ='bg-warning text-center'>
      404 Error
       {/* Programitically navigating back  */}
       <button className='btn btn-danger' onClick={()=>navigate('/')}>Back</button>
    </div>
  );
}

export default PageNotFound;
