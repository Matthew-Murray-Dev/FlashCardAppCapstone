import React from "react";




function flipButton({flip,setFlip}){return (
    <div className="FlipButton">
      <button type="button" className="btn mr-2" style={{"backgroundColor":"#737373"}}
        variant="contained" onClick={() => setFlip(!flip)} >Flip</button>
    </div>
  );}

export default flipButton;