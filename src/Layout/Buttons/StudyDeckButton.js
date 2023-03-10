import React from "react";
import { useHistory } from "react-router-dom";

function StudyDeckButton({deck}){
   
    const history=useHistory();

    return (
      <div className="StudyButton">
        <button className="btn mr-2" 
          variant="contained" style={{"backgroundColor":"#45b6fe"}} onClick={() => history.push(`/decks/${deck.id}/study`)}>Study</button>
      </div>
    );}
//startIcon={<MenuBookIcon/>}
export default StudyDeckButton;