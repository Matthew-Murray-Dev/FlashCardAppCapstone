import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function DeleteDeckButton({deck}){

  const {url}=useRouteMatch();
  const history= useHistory();
  const handleDelete = (event) => {
    event.preventDefault()
   windowConfirm()
   
   
}


const reDirect=()=>{deleteDeck(deck.id)
  history.push("/")}
const windowConfirm=()=>{window.confirm(`Delete this Deck?\n\nYou will not be able to recover it.`)? reDirect():history.push(url)}
    return (
    <div className="DeleteButton">
      <button size="large" type="button" className="btn pr-2" style={{height:"36.5px",maxWidth: '36px',  minWidth: '36px' ,"backgroundColor":"#D9534f"}}
        variant="contained"  onClick={handleDelete}></button>
    </div>
  );

}
//startIcon={<DeleteIcon/>}
export default DeleteDeckButton;