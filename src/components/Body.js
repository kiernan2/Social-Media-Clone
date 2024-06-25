import React from "react";

function Body(){
  return (
    <div class="row">
      <div class="border border-1 container col-3">
        <div class="container p-4 g-2 text-white bg-primary">
          <div class="row">
            <h5> <span class="badge text-bg-secondary"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg></span> Kellie A. Corrigan</h5>
          </div>
          <div class="row">
            <p>Tweet Following Fololowers</p> {/* Typo in example image, send issues to provider of image. future corrections will still cost extra */}
          </div>
        </div>
        <div class="container p-4 g-2">
          <p>Curabitur tempus sodales ante vel hendrerit. Praesent aliquam eros quis risus sagittis, id volutpat erat faucibus. Donec sodales ut sem sit amet maximus. Vivamus volutpat turpis lorem, ac dictum neque tristique quis. Maecenas auctor facilisis ante, eget molestie dui dignissim in. Quisque est nibh, tincidunt pulvinar posuere eget, convallis ut est. Etiam vitae elit risus. In dictum laoreet neque, nec suscipit odio lacinia at. Pellentesque at placerat arcu, sit amet tincidunt nisl. Quisque ornare nibh in sem ullamcorper, eu accumsan tortor maximus. In viverra vestibulum gravida.</p>
        </div>
      </div>
      <div class="border p-4 g-2 border-1 container col-7">
        <div class="row bg-info text-white">
          <svg class="col-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390ZM480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5ZM177-581q51-29 89-75t57-103q-51 29-89 75t-57 103Zm249-214Zm-103 36Z"/></svg>
          <input class="col-11 border border-2 border-primary" type="text" placeholder="What's happening?"/>
        </div>
        <div class="row">
          <svg class="col-1" xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 -960 960 960" width="75px" fill="#ECB576"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
          <div class="container col-11">
            <h5>Lorem ipsum</h5>
            <p class="border border-2 border-white">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div class="row">
          <svg class="col-1" xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 -960 960 960" width="75px" fill="#ECB576"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
          <div class="container col-11">
            <h5>Lorem ipsum</h5>
            <p class="border border-2 border-white">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div class="row">
          <svg class="col-1" xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 -960 960 960" width="75px" fill="#ECB576"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
          <div class="container col-11">
            <h5>Lorem ipsum</h5>
            <p class="border border-2 border-white">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
      <div class="border border-1 p-4 g-2 container col-2">
        <div class="row container">
          <h5>Lorem ipsum</h5>
          <p class="border border-2">Mauris gravida interdum</p>
          <h5>Lorem ipsum</h5>
          <p class="border border-2">Mauris gravida interdum</p>
          <h5>Lorem ipsum</h5>
          <p class="border border-2">Mauris gravida interdum</p>
          </div>
      </div>
    </div>
  );
}

export default Body;