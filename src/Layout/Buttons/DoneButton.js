import React from "react";
import { useHistory } from "react-router-dom";

function DoneButton(){
  const history=useHistory();

  return (
    <div className="DoneButton">
      <button type="button" className="btn mr-2" style={{"backgroundColor":"#737373"}}
        variant="contained" onClick={() => history.goBack()} >Done</button>
    </div>
  );
}

export default DoneButton;
