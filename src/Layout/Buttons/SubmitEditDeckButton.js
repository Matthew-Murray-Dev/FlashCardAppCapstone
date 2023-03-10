import React from "react";



function SubmitEditDeckButton({handleFormSubmit}){


  return (
    <div className="SubmitEditDeckButton">
      <button className="btn" style={{"backgroundColor":"#45b6fe"}}
        variant="contained" onClick={handleFormSubmit} >Submit</button>
    </div>
  );
}

export default SubmitEditDeckButton;
