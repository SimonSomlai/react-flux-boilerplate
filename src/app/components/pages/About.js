import React, {Component} from 'react';
import Logo from '../../../assets/images/ida.png'

class About extends Component {
  render() {
    return (
      <div className="container clearfix margintop">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
          <img alt="my-cool-logo" className="center-block img-responsive" src={Logo}/>
            <h3 className="text-center">This is the about page! It's plain & boring :(
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
