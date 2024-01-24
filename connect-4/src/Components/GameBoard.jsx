import {React} from "react";
import GameCircle from "./GameCircle";

const GameBoard = ()=>{
    return (<>
    <div>
    <GameCircle id= {1} > red</GameCircle>
    <GameCircle id= {2}/>
    <GameCircle id= {3}/>
    <GameCircle id= {4}/>
    <GameCircle id= {5}/>
    <GameCircle id= {6}/>
    <GameCircle id= {7}/>
    <GameCircle id= {8}/>

    </div>
    </>
    )
}


export default GameBoard ;