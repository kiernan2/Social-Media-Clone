import React from "react";
import TextBox from "./TextBox";
import Name from "./Name";

function ProfileBox(){
  return(
  <div class="border border-1 container col-3">
    <Name/>
    <TextBox/>
  </div>
  )
}

export default ProfileBox;