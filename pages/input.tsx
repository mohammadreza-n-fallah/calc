import React from "react"
import type {NextPage} from "next"
import { useState } from "react"


const  home =()=>{
    const [input1,setInput1]=useState("")
  const [input2,setInput2]=useState("")
  const [button,setButton]=useState(0)
  
    return(
    <div className='jam'>
      <div className='inpu'><input className='item1' placeholder='number 1'  type="text" onChange={(e)=> setInput1(e.target.value)} /> </div>
      <div className='inpu'><input className='item1' placeholder='number 2' type="text" onChange={(e)=> setInput2(e.target.value)} /> </div>
      <div className='submi'><button className='item2' type="submit" onClick={()=> setButton(Number(input1)+Number(input2))} >Plus</button></div>
    <div className='result'>{button}</div>
    </div>
    )}
    
  export default home;