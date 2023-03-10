import React from "react";

import { useRouteMatch, useHistory } from "react-router-dom";

function EditDeckButton()
{const { url,path } = useRouteMatch();
const history=useHistory();

return (
  <div className="EditDeckButton">
    <button className="btn mr-2" 
      variant="contained" style={{"backgroundColor":"#737373"}}  onClick={() => history.push(`${url}/edit`)}>Edit</button>
  </div>
);}
//startIcon={<EditIcon/>}
export default EditDeckButton;