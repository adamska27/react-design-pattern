import React from 'react';
import Link from './Link.jsx';

const Nav = (props) =>
  <nav>
    <Link href="#col1" content="First" onclick={props.onclick} classname={props.classname}/>
    <Link href="#col2" content="Second" onclick={props.onclick} />
    <Link href="#col3" content="Third" onclick={props.onclick} />
  </nav>;

export default Nav;
