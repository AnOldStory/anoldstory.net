import React from "react";

// import Config from "_variables";

import Link from "./Link";

import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Main.scss";

let linkObj = [
  {
    dest: "https://www.facebook.com/hc9904",
    msg: [<FontAwesomeIcon key="i" icon={faFacebook} />, " Facebook <hc9904>"],
  },
  {
    dest: "https://www.github.com/anoldstory",
    msg: [<FontAwesomeIcon key="i" icon={faGithub} />, " Github <AnOldStory>"],
  },
  {
    dest: "https://www.instagram.com/anoldstory_",
    msg: [
      <FontAwesomeIcon key="i" icon={faInstagram} />,
      " Instagram <anoldstory_>",
    ],
  },
  {
    dest: "mailto:hc9904@naver.com",
    msg: [
      <FontAwesomeIcon key="i" icon={faEnvelope} />,
      " E-mail <hc9904@naver.com>",
    ],
  },
  // {
  //   dest: "/admin",
  //   msg: [],
  // },
  // {
  //   dest: "https://code.anoldstory.net",
  //   msg: "test page",
  // }
];

const MainContainer = () => {
  return (
    <div>
      HyeongChang Lee
      {linkObj.map((element, idx) => (
        <Link key={idx} {...element} />
      ))}
      <a href="/admin">
        <FontAwesomeIcon key="i" icon={faMousePointer} /> Click
      </a>
    </div>
  );
};

export default MainContainer;
