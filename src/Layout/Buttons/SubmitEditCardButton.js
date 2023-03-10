import React from "react";



function SubmitEditCardButton({handleFormSubmit}){


  return (
    <div className="SubmitEditCardButton">
      <button className="btn" style={{"backgroundColor":"#45b6fe"}}
        variant="contained" onClick={handleFormSubmit} >Submit</button>
    </div>
  );
}

export default SubmitEditCardButton;
