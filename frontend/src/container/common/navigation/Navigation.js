import React from "react";
import NavigationSub from "./NavigationSub";

import "./Navigation.scss";

const Navigation = ({ list }) => {
  return (
    <div className="navigation">
      <NavigationSub list={list} />
    </div>
  );
};

export default Navigation;
