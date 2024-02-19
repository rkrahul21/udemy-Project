import {React} from "react";
import GameCircle from "./GameCircle";
import '../Game.css' ; 
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const  NO_PLAYER =0;
const  PLAYER_1 = 1;
const  PLAYER_2 = 2;


const GameBoard = ()=>{
        const [gameboard,setgameboard] = useState(Array(16).fill(NO_PLAYER));
        const [currentplayer,setcurrentplayer] = useState(PLAYER_1);

        const initboard=()=>{
            const circles = [];
            for(let i=0;i<16;i++){
              circles.push(rendercircle(i));
            }
            return circles;
            // setcurrentplayer(PLAYER_1);
            // setgameboard(Array(16).fill(NO_PLAYER));
        }

    const circleClicked =(id)=>{

        setgameboard( prev =>{
            return prev.map((circle,pos)=>{
                if(pos === id) return currentplayer;
                return circle;
            })
        })
            console.log(gameboard);
        setcurrentplayer(currentplayer === PLAYER_1 ? PLAYER_2 :PLAYER_1);
    }

    const rendercircle = id =>{
        return <GameCircle key={id} id={id} className={`player_${gameboard[id]}`} oncircleclicked={circleClicked}/>
    }
    return (
    <>
        <Header/>
        <div  className="gameBoard" >
            {initboard()}
        </div>
        <Footer/>
    </>
    )
}


export default GameBoard ;