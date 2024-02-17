import {React } from "react";
import '../Game.css' ;



const GameCircle = ({id,children,oncircleclicked})=>{ // object destructring

return(
    
        <div className={`gameCircle player_0`} onClick= {()=>oncircleclicked(id)}  >
         {children}
        
       </div>
   )
}

export default GameCircle ;