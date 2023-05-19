import React from 'react';

function Hooks2(e) {
    const [text,setText]=React.useState()
    const fname=(e)=>{
        console.log(e.target.value)
        setText(e.target.value)
    }
    const lname= (e)=>{
        console.log(e.target.value)
        setText(e.target.value) 
    }
    const uname= (e) =>{
        console.log(e.target.value)
        setText(e.target.value)
    }
    const pass= (e) =>{
        console.log(e.target.value)
        setText(e.target.value)
    }
  return (

    <div> 
      
          <label>name:</label>
          <input type='text' id='name' onChange={(e)=> fname(e)}></input><br></br>

          <label>last name:</label>
          <input type='text' id='last' onChange={(e)=> lname(e)}></input><br></br>
      
          <label>user name:</label>
          <input type='text' id='user' onChange={(e)=> uname(e)}></input><br></br>

          <label>password:</label>
          <input type='password' id='pass' onChange={(e)=> pass(e)}></input><br></br>
         
          
    </div>
  )
}

export default Hooks2