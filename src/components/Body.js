import React from "react";
import MidBox from "./MidBox";
import SuggestionBox from "./SuggestionBox";
import ProfileBox from "./ProfileBox";

function Body(){
  return (
    <div class="row">
      <ProfileBox/>
      <MidBox/>
      <SuggestionBox/>
    </div>
  );
}

export default Body;