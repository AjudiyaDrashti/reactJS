import React from 'react'

function Hooks1() {
    const [val , setVal] = React.useState(0)
    const click=(type)=>{
        console.log("clicked" , type)
         if(type==='dec' && val>0){
                  setVal(val-1)
         }
         else if(type==='inc'){
              setVal(val+1)
         }
     }
  return (
    <>
    <div className="row">
        <div className="col-md-1">
    <button type="button" className="btn btn-dark" onClick={()=>click('dec')}>decrement</button></div><br></br>
      <div className="col-md-1"><h6 className='col-md-4'>{val>0?val:0}</h6></div><br></br>
    <div className="col-md-10"><button type="button" className="btn btn-dark" onClick={()=>click('inc')}>increment</button></div><br></br>
    </div>
    </>
  )
}

export default Hooks1