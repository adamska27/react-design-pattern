import React, { Component } from 'react';
import './App.css';
import Col from './component/Col.jsx';
import Nav from './component/Nav.jsx';
import './css/Nav.css';


class App extends Component {
  state ={
      active: {
        borderBottom: "gray solid 5px",
      },
      noActive: {
        borderBottom: "1px solid gray",
      }
  }

  activeLink = (event) => {
    if (event.target.style.borderBottom = this.state.active.borderBottom) {

    }
  }

  render() {
    return (
      <div className="App">
        <Nav noActive={this.state.noActive} onfocus={this.activeLink} />

        <div className="content-wrapper">
          <div className="content">
          <Col id="col1" title={"test"} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>

          <Col id="col2" title={"test2"} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>

          <Col id="col3" title={"test3"} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
