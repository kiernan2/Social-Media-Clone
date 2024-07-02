import React from "react";
import TextBox from "./TextBox";
import Profile from "./Profile";

function ProfileBox(){
  return(
  <div class="border border-1 container col-3">
    <Profile/>
    <TextBox/>
  </div>
  )
}

export default ProfileBox;