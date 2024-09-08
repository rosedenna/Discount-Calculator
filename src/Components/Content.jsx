import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
function Content() {

  const [amt,setAmt]= useState(0)
  const [per,setPer]=useState(0)
  const [dis,setDis]=useState(0)

  const calculate=(e)=>{
    const op = (amt*per)/100
    
    setDis(op)
  }
  const reset=(e)=>{
    setAmt(0)
    setDis(0)
    setPer(0)
  }

  return (
    <>
      <div className="container mt-5 text-center p-5">
      <h1 className='text-warning' style={{fontFamily:'cursive'}}>Discount Calculator</h1>
      <p style={{marginTop:'-14px', fontSize:'13px'}}>Calculate your discount with us</p>
      <div className="row">
      <div className="col-4"></div>
      <div className="col-4 bg-light">
      <MDBInput label="Enter the amount" id="typeNumber" type="number" className='my-3'  value={amt || ''} onChange={(e)=>setAmt(e.target.value)}/>
      <MDBInput label="Enter the diccount percentage" id="typeNumber" type="number" className='my-3'  value={per || ''} onChange={(e)=>setPer(e.target.value)} />
      <MDBBtn className='my-3 me-3' onClick={e=>calculate(e)}>Calculate</MDBBtn>
      <MDBBtn className='my-3 ms-3 bg-danger' onClick={e=>reset(e)}>Reset</MDBBtn>

      <h2>Your discount is :&#8377; {dis} </h2>
        <h1 className='text-success'>Amount Payable :&#8377; {amt-dis}</h1>
      </div>
      <div className="col-4">
        
      </div>
      </div>
      </div>
    </>
  )
}

export default Content
