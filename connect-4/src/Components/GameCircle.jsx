import {React } from "react";


const clickHandler = ()=>{
    alert("Clicked");
}
const GameCircle = ({id})=>{ // object destructring
    console.log(id);
return(
    <>
    <div onClick={clickHandler}>
        GameCircle
    </div>
    </>
)
}

export default GameCircle ;