import React, {Component} from 'react';
import NavbarTop from './components/shared/Navbar';

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <NavbarTop/>
        <div className="main">
          {React.cloneElement(this.props.children)}
        </div>
      </div>
    )
  }
}

export default DefaultLayout;
