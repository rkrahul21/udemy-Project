import {React} from "react";
import GameCircle from "./GameCircle";

const GameBoard = ()=>{
    return (
    <div>
    <GameCircle id= {1} color='red'> <span style={{color:'white',margin:"50%"}}> red </span></GameCircle>
    <GameCircle id= {2} color='blue'> <span style={{color:'white'}}>blue </span></GameCircle>
    <GameCircle id= {3} color='red'> <span style={{color:'white'}}>red </span></GameCircle>
    <GameCircle id= {4} color='blue'> <span style={{color:'white'}}>blue </span></GameCircle>
    <GameCircle id= {5} color='red'> <span style={{color:'white'}}>red </span></GameCircle>
    <GameCircle id= {6} color='blue'> <span style={{color:'white'}}>blue </span></GameCircle>
    <GameCircle id= {7} color='red'> <span style={{color:'white'}}>red </span></GameCircle>
    <GameCircle id= {8} color='blue'> <span style={{color:'white'}}>blue </span></GameCircle>
    </div>
    
    )
}


export default GameBoard ;