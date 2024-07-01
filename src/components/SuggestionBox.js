import React from "react";
import Suggestion from "./Suggestion";

function SuggestionBox() {
  return(
    <div class="border border-1 p-4 g-2 container col-2">
      <h4>Lorem ipsum</h4>
      <div class="row container">
        <Suggestion/>
        <Suggestion/>
        <Suggestion/>
      </div>
    </div>
  )
}

export default SuggestionBox;