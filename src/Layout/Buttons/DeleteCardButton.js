import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function DeleteCardButton({id}){

  const {url}=useRouteMatch();
  const history= useHistory();
  const handleDelete = (event) => {
    event.preventDefault()
   windowConfirm()
   history.go(0)
   
}
const windowConfirm=()=>{window.confirm(`Delete this card?\n\nYou will not be able to recover it.`)? deleteCard(id):history.push(url)}
    return (
    <div className="DeleteButton float-right">
      <button size="large" type="button" className="btn pr-2" style={{height:"36.5px",maxWidth: '36px',  minWidth: '36px' ,"backgroundColor":"#D9534f"}}
        variant="contained"  onClick={handleDelete}></button>
    </div>
  );

}
//startIcon={<DeleteIcon/>}
export default DeleteCardButton;