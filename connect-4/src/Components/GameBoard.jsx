import {React} from "react";
import GameCircle from "./GameCircle";
import '../Game.css' ; 
import { useState } from "react";

const  NO_PLAYER =0;
const  PLAYER_1 = 1;
const  PLAYER_2 = 2;


const GameBoard = ()=>{
        const [gameboard,setgameboard] = useState(Array(16).fill(NO_PLAYER));
        const [currentplayer,setcurrentplayer] = useState(PLAYER_1);

        const circleClicked =(id)=>{
        // console.log('circle clicked:'+ id)
        const board =[...gameboard];
        board[id] = currentplayer;
        setgameboard(board);
            console.log(gameboard);
        setcurrentplayer(currentplayer === PLAYER_1 ? PLAYER_2 :PLAYER_1);
    }

    const rendercircle = id =>{
        return <GameCircle id={id} className={`player_${gameboard[1]}`} oncircleclicked={circleClicked}/>
    }
    return (
    <div  className="gameBoard" >
       
    {rendercircle(0)}
    {rendercircle(1)}
    {rendercircle(2)}
    {rendercircle(3)}
    {rendercircle(4)}
    {rendercircle(5)}
    {rendercircle(6)}
    {rendercircle(7)}
    {rendercircle(8)}
    {rendercircle(9)}
    {rendercircle(10)}
    {rendercircle(11)}
    {rendercircle(12)}
    {rendercircle(13)}
    {rendercircle(14)}
    {rendercircle(15)}
    </div>
    
    )
}


export default GameBoard ;