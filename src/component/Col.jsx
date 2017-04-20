import React from 'react';

const Col = (props) =>
  <div id={props.id}>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
  </div>;

export default Col;
