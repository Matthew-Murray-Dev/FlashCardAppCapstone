import React from "react";



function SubmitNewDeckButton({handleFormSubmit}){


  return (
    <div className="SubmitButton">
      <button className="btn" style={{"backgroundColor":"#45b6fe"}}
        variant="contained" onClick={handleFormSubmit} >Submit</button>
    </div>
  );
}

export default SubmitNewDeckButton;
