import React from "react";
import '../Game.css'

const Footer =({onclickevent}) =>{
    return (
        <div className="panel footer">
            <button onClick={onclickevent}> New Game</button>
        </div>
    )
}

export default Footer;