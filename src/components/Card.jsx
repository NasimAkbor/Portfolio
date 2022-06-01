import React from "react";
import projList from "./ProjList";

function Card(props) {
  let { name, n2, git, url, description } = projList[props.index];

  return (
    <div className="card">
      <div className="content">
        <h1>{name}</h1>
        <h3><span>Description: </span>{description}</h3>
        <h3><span>Git: </span><a href={`${git}`}>{git}</a></h3>
        <h3><span>url: </span><a href={`${url}`}>{url}</a></h3>
      </div>
      <div className={`flap  ${n2}`}></div>
    </div >
  )
}

export default Card;
