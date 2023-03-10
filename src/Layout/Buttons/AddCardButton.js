import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

function AddCardButton({id}){const { url } = useRouteMatch();
const history=useHistory();

return (
  <div className="StudyButton">
     <button className="btn" style={{"backgroundColor":"#45b6fe"}}
      variant="contained"  onClick={() => history.push(`/decks/${id}/cards/new`)}>Add Cards</button>
  </div>
);}
//startIcon={<AddIcon/>}
export default AddCardButton;