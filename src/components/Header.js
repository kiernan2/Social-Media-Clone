import React from "react";

function Header(){
  return (
    <header class="container">
      <div class="row">
        <div class="col">
          <button class="rounded-0 border border-dark btn btn-light">Home</button>
          <button class="rounded-0 border border-dark btn btn-light">Notifications</button>
          <button class="rounded-0 border border-dark btn btn-light">Messages</button>
        </div>
        <div className="col text-end">
          <input class="rounded-pill border border-primary" type="text" placeholder="Search" aria-label="Search"/>
          <input class="rounded-pill border border-primary" type="text" placeholder="Tweet" aria-label="Tweet"/>
        </div>
      </div>
    </header>
  );
}

export default Header;