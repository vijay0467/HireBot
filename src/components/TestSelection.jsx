import React from 'react';
import {Questions} from "../Data/questions";
const TestSelection = ({onselectCategory}) => {
    //hardcpded values to test
    // let categories=["HTML","CSS","BOOTSTRAP","JAVASCRIPT"];
     //accessing the values dynamically
    let categories=Object.keys(Questions);
  return (
    <div className='container'>
        <h2 className='text-center mb-4'>Take the test to Ace Interviews</h2>
      <div className="card p-4 shadow " style={{backgroundColor:'#F7D0F1'}}>
        <div className='d-flex justify-content-center'>
         {
            categories.map((sub)=>(
                <button key={sub} onClick={()=>onselectCategory(sub)} className='btn btn-success mx-2'>
                    {sub}
                </button>
              
            ))
         }
      </div>
      </div>
    </div>
  );
}

export default TestSelection;
