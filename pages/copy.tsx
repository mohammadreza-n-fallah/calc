import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { homedir } from 'os'
import { Children, useEffect, useRef, useState } from 'react'
import { global } from 'styled-jsx/css'
import React from 'react'
import { validateHeaderValue } from 'http'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faDivide,
  faBackspace,
  faClose,
  faSquareRootVariable,
  faSquareRootAlt,
  faMinimize,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";


/*const Home: NextPage = () => {
  const [number, setNumber] = useState(0)
  return (
    <div className="hello">
      <div onClick={() => setNumber(number+1)}>HELLO</div>
      <div>{number}</div>
    </div>
  )
}

export default Home*/
/*const Home: NextPage = () => {
  const [num1, setNum1] = useState("")
  const [num2,setNum2] = useState("")
  const [result,setResult] = useState(0)
  console.log(num1)
  return(
    <>
      <input type="text" onChange={(e) => setNum1(e.target.value)} />
      <br></br> <br></br>
      <input type="text" onChange={(e) => setNum2(e.target.value)} />
      <div onClick={() => setResult(Number(num1)+Number(num2))}>click</div>
      <div>{result}</div>
    </>
  )
}
export default Home;*/


// import the icons you need
/*
const Home = (props:any) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faAmbulance}
        style={{ fontSize: 100, color: "orange" }}
      />
      <FontAwesomeIcon
        icon={faAnchor}
        style={{ fontSize: 100, color: "green" }}
      />
    </div>
  );
};
export default Home;
*/
  
 

const calculater=()=>{
  const [display,setDisplay]=useState("");
  const [previos,setPrevios]=useState("");
  const [amaliat,setAmaliat]=useState("");
const show = (value: any) =>{
  if(value === '.' && display.includes('.'))return;
  if(value === '(' && display.includes('('))return;
  if(value === ')' && display.includes(')'))return;
  setDisplay(display + value )
}

const delet=()=>{
  setDisplay(display.slice(0,-1))
}

const clear = () => {
  setDisplay("")
}

const ecu=()=>{
  setDisplay(eval(display))
}

const fac=()=>{
  var i,num,f;
  f=1;
  num=Number(display);
  for(i=1;i<=num;i++){
      f=f*i;
  }
  setDisplay(f.toString())
}

const pow=()=>{
  //let f=setDisplay(display)
  let e=Math.pow(Number(display),2)
  setDisplay(e.toString())
}

const clos=()=>{
  return  window.close();
}

const rad=()=>{
  let f=display;
  let e=Number(f)/360;
  setDisplay(e.toString())
}
const inv=()=>{
  let s=display.split("");
  setDisplay(s.reverse().join("").toString())

}

/*
const oper=(value:any)=>{
  if(display==="")return
  if(display!==""){
  return setDisplay(display+value)
}
}
/*
const choo=(e:any)=>{
  if(display==="")return;
  if(previos!==""){
  let valu:any = compute();
  setPrevios(valu);
}else{
  setPrevios(display+e)
}
  setDisplay("")
}
const ecu=()=>{
  let value=compute();
  if(value===undefined || value===null)return
  setDisplay(value)
  setPrevios("")
}
const compute=()=>{
  let result;
  let previosnumber=parseFloat(previos)
  let displaynumber=parseFloat(display)
}
*/

return(
  <div  id="calculater">
      <div className="bala">
          <div className="i"><p onClick={clos} ><FontAwesomeIcon icon={faClose} /></p></div>
          <div className="i"><p ><FontAwesomeIcon icon={faSquare} /></p></div>
          <div className="i"><p ><FontAwesomeIcon icon={faMinimize}/></p></div>
      </div>
      <div id="result" >
          <div className='scre'>{previos} {amaliat}</div>
          <div className='scre'>{display}</div>
      </div>
      <div className="mohasebat">
          <div className="x">
              <div className="botton" style={{backgroundColor: 'rgb(52, 62, 77)'}}><p onClick={clear} >CE</p></div>
              <div className="botton" style={{backgroundColor: "rgb(52, 62, 77)",color: "brown"}}><p onClick={clear} >C</p></div>
              <div className="botton" style={{backgroundColor: "rgb(52, 62, 77)"}}><p onClick={delet} ><FontAwesomeIcon icon={faBackspace}/></p></div>
              <div className="botton" style={{backgroundColor: "rgb(52, 62, 77)"}}><p onClick={()=>show("/")}><FontAwesomeIcon icon={faDivide}/></p></div>
              <div className="right">
                    <div className="botton m"><p onClick={inv}>inv</p></div>
                    <div className="botton m"><p onClick={rad}>Rad</p></div>
                    <div className="botton m"><p onClick={()=>setDisplay(Math.sin)}>Sin</p></div>
              </div>
          </div>
          <div className="x">
              <div className="botton"><p onClick={()=>show(7)}>7</p></div>
              <div className="botton"><p onClick={()=>show(8)}>8</p></div>
              <div className="botton"><p onClick={()=>show(9)}>9</p></div>
              <div className="botton" style={{backgroundColor: "rgb(52, 62, 77)"}}><p onClick={()=>show("*")}><FontAwesomeIcon icon={faClose}/></p></div>
              <div className="right">
                    <div className="botton m"><p onClick={()=>setDisplay(Math.cos)} >Cos</p></div>
                    <div className="botton m"><p onClick={()=>setDisplay(Math.tan)}>Tan</p></div>
                    <div className="botton m"><p >%</p></div>
              </div>
          </div>
          <div className="x">
              <div className="botton"><p onClick={()=>show(4)}>4</p></div>
              <div className="botton"><p onClick={()=>show(5)}>5</p></div>
              <div className="botton"><p onClick={()=>show(6)}>6</p></div>
              <div className="botton"  style={{backgroundColor: "rgb(52, 62, 77)"}} ><p onClick={()=>show("-")} >_</p></div>
              <div className="right">
                    <div className="botton m"><p onClick={()=>setDisplay(Math.LN10)}>In</p></div>
                    <div className="botton m"><p onClick={()=>setDisplay(Math.log)}>Log</p></div>
                    <div className="botton m"><p onClick={()=>fac()}>!</p></div>
              </div>
          </div>
          <div className="x">
              <div className="botton"><p onClick={()=>show(1)}>1</p></div>
              <div className="botton"><p onClick={()=>show(2)}>2</p></div>
              <div className="botton"><p onClick={()=>show(3)}>3</p></div>
              <div className="botton" style={{backgroundColor: "rgb(52, 62, 77)"}}><p onClick={()=>show("+")}>+</p></div>
              <div className="right">
                    <div className="botton m"><p onClick={pow}>^</p></div>
                    <div className="botton m"><p onClick={()=>setDisplay(Math.PI)} >pi</p></div>
                    <div className="botton m"><p onClick={()=>show(2.718281)}>e</p></div>
              </div>
          </div>
          <div className="x">
              <div className="botton" style={{backgroundColor: "rgb(52, 62, 77)"}}><p onClick={()=>show(".")}>.</p></div>
              <div className="botton"><p onClick={()=>show(0)}>0</p></div>
              <div className="botton equal"><p onClick={ecu}>=</p></div>
              <div className='right'>
                    <div className='botton m'><p onClick={()=>show("(")}>(</p></div>
                    <div className='botton m'><p onClick={()=>show(')')}>)</p></div>
                    <div className='botton m'><p id="root" onClick={()=>setDisplay(Math.sqrt)}><FontAwesomeIcon icon={faSquareRootAlt} /></p></div>
              </div>
          </div>
    </div>
  </div>
     )
     }
     export default calculater;
     