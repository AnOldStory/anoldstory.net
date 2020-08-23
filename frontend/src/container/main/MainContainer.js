import React, { Component } from "react";

// import Config from "_variables";
// import Counter from "./Counter";
import Link from "./Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./Main.scss";

class MainContainer extends Component {
  render() {
    return (
      <div>
        {/* {process.env.NODE_ENV} */}
        {/* <Counter msg="world!" /> */}
        <Link
          dest="https://www.facebook.com/hc9904"
          msg={[<FontAwesomeIcon icon={faFacebook} />, " Facebook <hc9904>"]}
        />
        <Link
          dest="https://www.instagram.com/anoldstory_"
          msg={[
            <FontAwesomeIcon icon={faInstagram} />,
            " Instagram <anoldstory_>",
          ]}
        />
        <Link
          dest="https://www.github.com/anoldstory"
          msg={[<FontAwesomeIcon icon={faGithub} />, " Github <anoldstory>"]}
        />
      </div>
    );
  }
}

export default MainContainer;
