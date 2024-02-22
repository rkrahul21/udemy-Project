import React from "react";
import '../Game.css'
import { GAME_STATE_DRAW, GAME_STATE_PLAYING,GAME_STATE_WIN } from "../constant";

const Header =({state,player,winplayer}) =>{
    const renderlabel =()=>{
        switch(state){
            case GAME_STATE_PLAYING:
                return   <>Player {player} Turn</>
            case GAME_STATE_WIN:
                return <>Player {winplayer} wins</>
            case GAME_STATE_DRAW:
                return <> Game Draw !</>
            default:
        }
    }
    return (
        <div className="panel header">
            <div className="header-text">
                {renderlabel()}
            </div>
        </div>
    )
}

export default Header;