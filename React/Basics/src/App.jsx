// import React, { Component } from "react";


// export default class App extends Component{
//     render(){
//        return <h1>Hellooooo Betaaaaaaaaaa aaa aaaaaaa</h1>
//     }
// }


// import Card from "./Components/Card"
// import User from "./Components/User"
// import { useState } from "react";
// let App = () =>{
//     // let card1 = "THis is card 1"
//     // let card2 = "THis is card 2"
//     const [state,setState]=useState(0);

//     let hanleState=()=>{
//         setState(10)
//     }
//     let increse = () => {
//         setState(prev => prev+1)
//     }


//     return(
//         <div>
//            {/* <User/> */}
//            <h1>This is a state Variable{state}</h1>
//             <button onClick={hanleState}>Update</button>
//             <button onClick={increse}>CountIncrementer</button>
//         </div>
//     )
// }

// export default App




// import React from 'react'
// import { useState } from 'react'
// function App() {
//     const[show,setShow] = useState(true)
//     let handle = ()=>{
//         setShow(prev => !prev);
//     }
//     let hide = ()=>{
//         setShow(prev => !prev)
//     }
//   return (
//     <div>
//         <input type={show ? "text" : "password"} />
//         <button onClick={show?handle:hide}>{show? <i class="fa-solid fa-eye"></i>:<i class="fa-solid fa-eye-slash"></i>}</button>        
//     </div>
//   )
// }

// export default App




//bulb Task.
// import React from 'react'
// import { useState } from 'react'
// import glowbulb from './Assets/glowingBulb.jpeg'
// function App() {
//     const [state,setState] = useState(true)
//         let handle = ()=>{
//         setShow(prev => !prev);
//     }
//     let hide = ()=>{
//         setShow(prev => !prev)
//     }
//   return (
//     <div>
//         <img src={glowbulb} alt="some-img" />

//         <button></button>
//     </div>
//   )
// }

// export default App




//useState

import React, { useState } from 'react'
import { useEffect } from 'react'

function App() {
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)

    let handleCount = ()=>{
        setCount(prev=>prev+1)
    }
    let handleCOunt2 = ()=>{
        setCount1(prev=>prev+1)
    }

    useEffect(() => {
      console.log("This is useEffect snippet")
    },[])
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleCount}>Increase</button>
        <button onClick={handleCOunt2}>This is </button>
    </div>
  )
}

export default App
    