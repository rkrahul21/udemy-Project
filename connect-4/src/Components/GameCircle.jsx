import {React } from "react";


const clickHandler = (id)=>{
    alert("Clicked on id no." +id );
}

const GameCircle = ({id,color,children})=>{ // object destructring
    console.log(id);
return(
    
    <div onClick= {()=>clickHandler(id , color)} style={{backgroundColor:color}} >
       {children}
        
    </div>
    
)
}

export default GameCircle ;