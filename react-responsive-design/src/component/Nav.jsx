import React from 'react';
import Link from './Link.jsx';

const Nav = (props) =>
  <nav>
    <Link href="#col1" classname="active" content="First" />
    <Link href="#col1" classname="" content="Second" />
    <Link href="#col1" classname="" content="Third" />
  </nav>;

export default Nav;
