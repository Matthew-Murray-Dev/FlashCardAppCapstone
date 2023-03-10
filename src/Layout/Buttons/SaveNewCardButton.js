import React from "react";


function SaveNewCardButton({handleFormSubmit}){
  

  return (
    <div className="SaveButton">
      <button className="btn" style={{"backgroundColor":"#45b6fe"}}
        variant="contained" onClick={handleFormSubmit} >Save</button>
    </div>
  );
}

export default SaveNewCardButton;
