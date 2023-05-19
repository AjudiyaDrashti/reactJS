import React from "react";
import Register from "./register";
import Login from "./login";
import Hooks from "./hooks";
import Hooks1 from "./hooks1";
import Hooks2 from "./hooks2";

function App() {
 const [isRegister,setisRegister]=React.useState(true)
 const isLogin = ()=> {
    setisRegister(false)
 }
  
  return (
    <div>
      {/* <Hooks/> */}
      {/* <Hooks1/> */}
      
     {isRegister ? <Register isLogin={isLogin}/> : (<Login/>)}
      {/* <Hooks2/> */}
    </div>
  );
}

export default App;
