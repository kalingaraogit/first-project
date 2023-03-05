// import React from 'react'

// function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App

// 1

// import React,{useState} from 'react'

// const App = () => {
//   const [counter,setCounter] = useState(0);
//   const [name,setName] = useState('');

//   function increaseCounter(){
//     setCounter(counter+1);
//   }
//   return (
//     <div>
//       <input type='text' onChange={e=>setName(e.target.value)}/>
//       <h1> {name} has clicked{counter} times!!</h1>
//       <button onClick={increaseCounter}>increase</button>
//     </div>
//   )
// }

// export default App




// 2

// import React,{useState} from 'react'

// const App = () => {
//   const[details,setDetails] = useState({counter:0,name:""});

//   function increaseCounter(){
//     // setDetails({counter:details.counter+1});
//     setDetails((prev)=>({
//       ...prev,
//       counter:prev.counter +1,
//     }));
//     console.log(details)
//   }
//   return (
//     <div>
//       <input type='text' onChange={e=>e.target.value}/>
//       <h1> {details.name} has clicked{details.counter} times!!</h1>
//       <button onClick={increaseCounter}>increase</button>
//     </div>
//   )
// }

// export default App


// 3

// import React,{useState,useEffect} from 'react'

// const App = () => {
//   const[count,setCount] = useState(0);
//   const[othercount,setothercount] = useState(5);
  
// //   useEffect(()=> {
// //     document.title = `${count} new messages!`;
// //  },[]);

//   useEffect(()=> {
//      document.title = `${othercount} new messages!`;
//   },[othercount,count]);
//   return (
//     <div>
//       <h3>{count} new messages!;</h3>
//       <button onClick={()=>setCount(count+1)}>Increase</button>
//       <h3>other count :{othercount}  </h3>
//       <button onClick={()=>setothercount(othercount+5)}>
//         increase by 5
//       </button>
//     </div>
//   )
// }

// export default App

// 4
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const[time,setTime] = useState(0);

//   useEffect(()=>{
//     const timer = setInterval(()=>{
//     setTime(time+1);
//   },1000);

//   return ()=>{
//     clearInterval(timer)
//   }
//  },[]);
  
//   return (
//     <div>
//       <h3>{time} in seconds</h3>
//     </div>
//   )
// }

// export default App

// 4.1



// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [count,setCount] = useState(0);
//   useEffect(()=>{ 
//     console.log('Run use effect',count)
//     return()=>{
//        console.log('clean up',count)
//        ;}
//   },[count])
//   return (
//     <div>
//       <h3>count{count} in seconds</h3>
//       <button onClick={()=>setCount(count+1)}>increase</button>
//     </div>
//   )
// }

// export default App



                        //  conext
// import React from 'react'
// import ComponentB from './context/contrext2.js/ComponentB'

// export const UserContext = React.createContext();

// const App = () => {
//   return (
//     <div>
//       <center>
//          <UserContext.Provider value={'telugu'}>
//          <ComponentB/>
//          </UserContext.Provider>
//       </center>
//     </div>
//   )
// }

// export default App



                    //  useRef
//  why we dont use usestate hook for count render
//  if u use useEffect renders again and again so useRef

// import React, {useEffect, useState } from 'react'

// const App = () => {

//   const[name,setName] = useState('');
//   const[count,setCount] = useState(0)

//   useEffect(()=>{
//     setCount((prev)=>prev+1)
//   })
//   return (
//     <div>
//       <input type='text' onChange={(e) =>setName(e.target.value)}/>
//       <h2>Name:{name}</h2>
//       <h2>renders:{count}</h2>
//       </div>
//   )
// }

// export default App



                  //  useRef Real



// import React, {useRef, useState } from 'react'
// import { useEffect } from 'react';

// const App = () => {

//   const[name,setName] = useState('');
//   const count = useRef(0)

//   // 1
//   // console.log(count)

//   useEffect(()=>{
//     count.current = count.current+1
//   })
//   return (
//     <div>
//       <input type='text' onChange={(e) =>setName(e.target.value)}/>
//       <h2>Name:{name}</h2>
//       {/* <h2>1renders:{count}</h2> */}
//       <h2>2renders:{count.current}</h2>
//       </div>
//   )
// }

// export default App


                    // useRef accessing the dom elements



// import React,{useRef} from 'react'

// const App = () => {
//   const inputEle = useRef();
//   const handleClick = ()=>{  
//     console.log(inputEle);
//     inputEle.current.style.width = '300px'
//     inputEle.current.focus();
//   }
//   return (
//     <div>
//       <input type='text' ref={inputEle}/>
//       <button onClick={handleClick}>click Here</button>
//     </div>
//   )
// }

// export default App
                    

                      // useReducer

// import React,{useReducer} from 'react'
//  const initialState = {count:0}

//  const ACTION = {
//   INCREASE:'increase',
//   DECREASE:'decrease'
//  }
//  const reducer = (state,action)=>{
//     switch(action.type){
//       case ACTION.INCREASE:
//         return{count:state.count+1};

//       case ACTION.DECREASE:
//         return{count:state.count-1}

//       default:
//         return state;

//     }
  
//  }
// const App = () => {
//   const[state,dispatch]=useReducer(reducer,initialState)

//   const increaseCount = ()=>{
//       dispatch({type:ACTION.INCREASE});
//   }

//   const decreaseCount = ()=>{
//     dispatch({type:ACTION.DECREASE});
//   }
//   return (
//     <div>
//       <h2>count:{state.count}</h2>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

// export default App






                      //  useLayoutEffect1



// import React,{useEffect,useLayoutEffect,useState} from 'react';
// const App = () => {
//     const [toggle,setToggle] = useState(false);

//     useEffect(()=>{
//       console.log('useEffect');
//     },[toggle]);

//     useLayoutEffect(()=>{
//       console.log('useLayoutEffect');
//     },[toggle]);
//   return (
//     <>
//       <button onClick={()=>setToggle(!toggle)}>Toggle</button>
//       {toggle && <h4>Code Bles You</h4>}
//     </>
//   )
// }

// export default App

                      // 2


// import React,{useEffect,useLayoutEffect,useRef,useState} from 'react';
// const App = () => {
//     const [toggle,setToggle] = useState(false);
//     const textRef = useRef()

//     useLayoutEffect(()=>{
//       if(textRef.current != null){
//         const dimension = textRef.current.getBoundingClientRect();
//         textRef.current.style.paddingTop=`${dimension.height}px`
//       }
//     },[toggle]);


//     // useLayoutEffect(()=>{
//     //   console.log('useLayoutEffect');
//     // },[toggle]);
//   return (
//     <>
//       <button onClick={()=>setToggle(!toggle)}>Toggle</button>
//       {toggle && <h4 ref={textRef}>Code Bles You</h4>}
//     </>
//   )
// }

// export default App                      



                          //  usememo

import React,{useState} from 'react'

const App = () => {
  const[number,setNumber]= useState(0)
  const[dark,setDark] = useState(false);

  const calculation = expensiveFunction(number);
  const cssStyle = {
    background:dark ? 'red':'green',
    color:dark? 'white':'red'
  }
  return (
    <div style={cssStyle}>
      <input
      onChange={(e)=>setNumber(e.target.valueAsNumber)}
      type='number'
      value={number}
      />
      <h2>Calculation:{calculation}</h2>
      <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )
}

function expensiveFunction(num){
  console.log('Loop Started');
  for(let i=0;i<10000;i++){}
  return num;
}
export default App
  

                    //  redux

// import {createStore,applyMiddleware} from 'redux'
// // const redux = require('redux')
// import {compositeWithDevtools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// const Store = createStore

// const BUY_CAKE = 'BUY_CAKE'

// function buycake(){
//     return {
//         type:BUY_CAKE,
//         info: 'First redux action'
//     }
// }

// // 

// const intialState = {
//     numOfCakes:10
// }


// const reducer = (state = intialState, action) =>{
    
//     switch (action.type) {
//         case BUY_CAKE:return{
//             ...state,
//             numOfCakes:state.numOfCakes - 1
//         }
//         default: return state
//     }
// }

// const store = createStore(reducer)
// console.log('initial state',store.getState())
// const unsubscribe = store.subscribe(()=>console.log('Updated state',store.getState()))
// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buycake())
// unsubscribe()                    

// export default buycake