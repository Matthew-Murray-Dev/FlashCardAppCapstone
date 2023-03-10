import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

function CreateDeckButton() {
  const { url } = useRouteMatch();
  const history=useHistory();

  return (
    <div className="CreateDeckButton">
      <button type="button" className="mb-2" style={{"backgroundColor":"#737373"}}
        variant="contained"  onClick={() => history.push(`/decks/new`)} >Create Deck</button>
    </div>
  );
}
//startIcon={<AddIcon/>}
export default CreateDeckButton;
