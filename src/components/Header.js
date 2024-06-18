import React from "react";

function Header(){
  return (
    <header>
      <div class="row">
        <div class="col-6">
          <button className="px-2">Home</button>  <button>Notifications</button>  <button>Messages</button>
        </div>
        <div className="col-6 text-end">
          Search Tweet
        </div>
      </div>
    </header>
  );
}

export default Header;