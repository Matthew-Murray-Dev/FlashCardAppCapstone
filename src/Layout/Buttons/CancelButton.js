import React from "react";
import { useHistory } from "react-router-dom";

function CancelButton(){
  const history=useHistory();

  return (
    <div className="CancelButton">
      <button type="button" className="btn mr-2" style={{"backgroundColor":"#737373"}}
        variant="contained" onClick={() => history.goBack()} >Cancel</button>
    </div>
  );
}

export default CancelButton;
