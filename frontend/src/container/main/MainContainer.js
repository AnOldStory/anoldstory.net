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
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";

import "./Main.scss";

let linkObj = [
  {
    dest: "https://www.facebook.com/hc9904",
    msg: [<FontAwesomeIcon icon={faFacebook} />, " Facebook <hc9904>"],
  },
  {
    dest: "https://www.github.com/anoldstory",
    msg: [<FontAwesomeIcon icon={faGithub} />, " Github <anoldstory>"],
  },
  {
    dest: "https://www.instagram.com/anoldstory_",
    msg: [<FontAwesomeIcon icon={faInstagram} />, " Instagram <anoldstory_>"],
  },
  {
    dest: "mailto:hc9904@naver.com",
    msg: [<FontAwesomeIcon icon={faEnvelope} />, " E-mail <hc9904@naver.com>"],
  },
];

class MainContainer extends Component {
  render() {
    return (
      <div>
        {/* {process.env.NODE_ENV} */}
        {/* <Counter msg="world!" /> */}
        HyeongChang Lee
        {linkObj.map((element, idx) => (
          <Link {...element} key={idx} />
        ))}
	<FontAwesomeIcon icon={faMousePointer} /> Click to Move
      </div>
    );
  }
}

export default MainContainer;
