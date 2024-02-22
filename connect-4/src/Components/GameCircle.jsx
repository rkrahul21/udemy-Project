import {React } from "react";
import '../Game.css' ;



const GameCircle = ({id,classCircle,oncircleclicked})=>{ // object destructring

return(
    
        <div className={`gameCircle ${classCircle}`} onClick= {()=>oncircleclicked(id)}  >
        
        
       </div>
   )
}

export default GameCircle ;