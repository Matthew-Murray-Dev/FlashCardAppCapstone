import React from "react";

import { useHistory } from "react-router-dom";

function NextButton({count,setCount,flip,setFlip,length}){
    const history=useHistory();
    const handleClick=(event)=>{
        setFlip(!flip)
        count<length-1 ? setCount(count+1) : windowConfirm()
        
    }

    const windowConfirm=()=>{
        window.confirm(`Restart Cards?\n\nClick 'cancel' to return to the home page menu`) ? setCount(0):history.push("/")
    }

    
       
    return (
    <div className="SubmitEditCardButton">
      <button className="btn" style={{"backgroundColor":"#45b6fe"}}
        variant="contained" onClick={handleClick}  >Next</button>
    </div>
  );}

export default NextButton;