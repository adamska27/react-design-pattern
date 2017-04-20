import React from 'react';

const Link = (props) =>
  <a href={props.href} style={props.style} onClick={props.onclick}>{props.content}</a>;

export default Link;
