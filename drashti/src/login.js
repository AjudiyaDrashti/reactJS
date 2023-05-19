import React from "react";

function Login(){
   

    const [mail,setMail]=React.useState()
  const [pas,setPas]=React.useState()
    const email=(e)=>{
        console.log(e.target.value)
        setMail(e.target.value)
    }
    const pass= (e) =>{
        console.log(e.target.value)
        setPas(e.target.value)
    }
    const click =() =>{
       let mailid= localStorage.getItem('email',mail)
        let password= localStorage.getItem('pass' , pas)
        console.log("check",typeof mailid,typeof mailid,typeof password,typeof password)
        if(mail===mailid && pas===password){
            alert('successful')
        }
        else{
            alert('try again')
        }
        
      }
    return(
        <>
        <div>
             <div className="back" style={{minHeight: '100vh', display: 'flex',alignItems: 'center', justifyContent: 'center',}}>
    <div>
    <div className="container" style={{backgroundColor: 'white', height: '100%' , width: '100%' , boxShadow: '5px 5px 5px 5px rgb(24, 23, 23)' , display: 'flex'}}>
        <form>
            <div style={{padding: '50px 70px'}}>
                <div style={{fontSize:' 24px', fontWeight: '500'}}>Login</div>
                <div style={{content: '', position:'relative', left: '0', bottom: '0', height: '3px', width: '25px', background: 'purple'}}></div>
                <div className="input-group mb-3" style={{marginTop: '30px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi      bi-envelope-at-fill" viewBox="0 0 20 20">
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 564-17564-743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/></svg>
                    <input type="email" style={{borderRadius: '10px', outline: 'none', border: 'none', padding: '0 30px', fontSize: '16px', fontWeight:' 500', borderBottom: '2px solid rgba(0,0,0,0.2)'}}className="form-control mb-2 " placeholder="Your Email" onChange={(e)=> email(e)}></input>
                </div>
                <div className="input-group mb-3 " style={{margin:'20px 0'}}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 20 20">
                   <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
                   <input style={{borderRadius: '10px', outline: 'none', border: 'none', padding: '0 30px', fontSize: '16px', fontWeight: '500',  borderBottom: '2px solid rgba(0,0,0,0.2)'}} type="password" className="form-control" name="password" placeholder="Password" onChange={(e)=> pass(e)}></input>
               </div> 
               <div style={{margin: '20px 0'}}><a href="#" style={{color: 'rgb(150, 63, 63)'}}>forgot password?</a></div>
                    <div><input className="btn btn-primary form-control" style={{background: 'rgb(150, 63, 63)' , borderRadius: '10px', borderColor: 'black', marginTop: '20px', cursor: 'pointer'}} type="submit" value="log-in" onClick={(e)=>click(e)}></input> </div>
            <div className="form-control" style={{fontSize: 'small', border: 'none', padding: '30px'}}>don't have an account? <a href="rgform2.html" style={{color: 'rgb(150, 63, 63)'}}>register now!!</a> </div>
            </div>
    </form>
    </div>
    </div>
</div>
        </div>
        </>
    )
}
export default Login
