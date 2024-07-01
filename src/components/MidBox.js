import React from "react";
import Post from "./Post";
import Search from "./Search";

function MidBox(){
  return(
    <div class="border p-4 g-2 border-1 container col-7">
      <Search />
      <Post />
      <Post />
      <Post />
  </div>
  )
}

export default MidBox;