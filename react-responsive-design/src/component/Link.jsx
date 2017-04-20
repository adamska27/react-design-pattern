import React from 'react';

const Link = (props) =>
  <a href={props.href} className={props.classname} onClick={props.onclick}>{props.content}</a>;

export default Link;
