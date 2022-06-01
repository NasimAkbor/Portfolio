import React from "react";
import projList from "./ProjList";

function Card(props) {
  let { name, git, url, description } = projList[props.index];

  return (
    <div className="card">
      <div className="content">
        <h1>{name}</h1>
        <h3><span>Description: </span>{description}</h3>
        <h3><span>Git: </span>{git}</h3>
        <h3><span>url: </span>{url}</h3>
      </div>
      <div class="flap"></div>
    </div>
  )
}

export default Card;
