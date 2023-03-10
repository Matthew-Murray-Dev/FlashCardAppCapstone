import React from "react";

import { useRouteMatch, useHistory } from "react-router-dom";

function ViewDeckButton({deck}){
    const { url } = useRouteMatch();
    const history = useHistory();
    return (
        <div className="ViewDeckButton">
          <button type="button" className="btn mr-2" style={{"backgroundColor":"#737373"}}
            variant="contained"  onClick={() => history.push(`${url}decks/${deck.id}`)} >View</button>
        </div>
      );
}
//startIcon={<VisibilityIcon/>}
export default ViewDeckButton;