import {React, useEffect} from "react";
import GameCircle from "./GameCircle";
import '../Game.css' ; 
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner,isDraw ,getComputermove} from "./helper";

import { GAME_STATE_DRAW,
        GAME_STATE_PLAYING,GAME_STATE_WIN,
        PLAYER_1,PLAYER_2,NO_PLAYER
       } from "../constant";

const GameBoard = ()=>{
        const [gameboard,setgameboard] = useState(Array(16).fill(NO_PLAYER));
        const [currentplayer,setcurrentplayer] = useState(PLAYER_1);
        const [gameState,setgameState] = useState(GAME_STATE_PLAYING);
        const [winPlayer , setwinplayer] = useState(NO_PLAYER);

    useEffect(()=>{
        initGame();
    },[]);

       const initGame=()=>{
        console.log("init game");
        setgameboard(Array(16).fill(NO_PLAYER));
        setcurrentplayer(PLAYER_1);
        setgameState(GAME_STATE_PLAYING);
       }

       const suggestMove=()=>{
            circleClicked(getComputermove(gameboard));
       }


        const initboard=()=>{
            const circles = [];
            for(let i=0;i<16;i++){
              circles.push(rendercircle(i));
            }
            return circles;
            // setcurrentplayer(PLAYER_1);
            // setgameboard(Array(16).fill(NO_PLAYER));
        };

    const circleClicked =(id)=>{
            if(gameboard[id] !== NO_PLAYER) return ;
            if(gameState !== GAME_STATE_PLAYING) return ;
           
            if(isWinner(gameboard,id,currentplayer)){
                console.log("winner");
                setgameState(GAME_STATE_WIN);
                setwinplayer(currentplayer);
            }

            if(isDraw(gameboard,id,currentplayer)){
                console.log("winner");
                setgameState(GAME_STATE_DRAW);
                setwinplayer(NO_PLAYER);
            }

        setgameboard( prev =>{
            return prev.map((circle,pos)=>{
                if(pos === id) return currentplayer;
                return circle;
            })
        })
        setcurrentplayer(currentplayer === PLAYER_1 ? PLAYER_2 :PLAYER_1);
        console.log(gameboard);
    }

    const rendercircle = id =>{
        return <GameCircle key={id} id={id} classCircle={`player_${gameboard[id]}`} oncircleclicked={circleClicked}/>
    }
    return (
    <>
        <Header state = {gameState} player ={currentplayer} winplayer = {winPlayer}/>
        <div  className="gameBoard" >
            {initboard()}
        </div>
        <Footer onclickNewgame = {initGame} onclicksuggest={suggestMove} gameState={gameState}/>
    </>
    )
}


export default GameBoard ;