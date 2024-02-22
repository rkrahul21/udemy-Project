import React from "react";
import '../Game.css'
import { GAME_STATE_PLAYING } from "../constant";

const Footer =({onclickNewgame , onclicksuggest,gameState}) =>{
    
    
    return (
        <div className="panel footer">
            { gameState === GAME_STATE_PLAYING &&
               <button onClick={onclicksuggest}>Suggest</button> 
            }
            {
                gameState !== GAME_STATE_PLAYING &&
                <button onClick={onclickNewgame}>New game</button> 
            }
            {/* <button onClick={onclickNewgame}> New Game</button> */}
            
        </div>
    )
}

export default Footer;