import React from 'react';
import Link from './Link.jsx';

const Nav = (props) =>
  <nav onFocus={props.onfocus}>
    <Link href="#col1" style={props.noActive} content="First" />
    <Link href="#col2" style={props.noActive} content="Second"/>
    <Link href="#col3" style={props.noActive} content="Third" />
  </nav>;

export default Nav;
