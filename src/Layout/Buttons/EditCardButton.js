import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

function EditCardButton({id}){
  const { url } = useRouteMatch();
const history=useHistory();

return (
  <div className="EditCardButton">
    <button className="btn mr-2" 
      variant="contained" style={{"backgroundColor":"#737373"}}  onClick={() => history.push(`${url}/cards/${id}/edit`)}>Edit</button>
  </div>
);}
//startIcon={<EditIcon/>}
export default EditCardButton;