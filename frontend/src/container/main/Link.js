import React from "react";

const Link = ({ dest, msg }) => {
  return (
    <a href={dest} className="main-link">
      <div className="main-link-span">{msg}</div>
    </a>
  );
};

export default Link;
