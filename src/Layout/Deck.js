import React from "react";
import ViewDeckButton from "./Buttons/ViewDeckButton";
import DeleteDeckButton from "./Buttons/DeleteDeckButton";
import StudyDeckButton from "./Buttons/StudyDeckButton";

function Deck({deck,data}) {


return (<div  className="border p-3 ">
<div className="row "><div className="col"><h4>{deck.name}</h4></div><div className="col text-right" ><p >{`${deck.cards.length} cards`}</p></div></div>
<p>{deck.description}</p> <div className="row justify-content-between pl-3"><div className="row pl-3"><ViewDeckButton deck={deck}/><StudyDeckButton deck={deck}/></div><div className="pr-3"><DeleteDeckButton deck={deck}/></div>
              </div>


</div>)


}

export default Deck;