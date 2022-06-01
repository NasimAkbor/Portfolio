import React from "react";
import Card from "./Card";

function Projects(props) {

  return (
    <div className='container'>
      <Card index={0} />
      <Card index={1} />
      <Card index={2} />
    </div>
  )
}

export default Projects;
