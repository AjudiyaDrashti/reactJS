import React from 'react'

function Hooks() {
     const click=(type)=>{
        console.log("clicked" , type)
     }
  return (
    <>
    <div>hooks</div>
    <button type="button" className="btn btn-success" onClick={()=>click('blue')}>blue</button>
    <button type="button" className="btn btn-success" onClick={()=>click('green')}>green</button>
    <button type="button" className="btn btn-success" onClick={()=>click('red')}>red</button>
    </>
  )
}

export default Hooks