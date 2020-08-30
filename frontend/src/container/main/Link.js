import React from "react";

const Link = ({ dest, msg }) => {
  console.log("hello");
  return (
    <div>
      <a href={dest} className="main-link">
        <div className="main-link-span">{msg}</div>
      </a>
    </div>
  );
};

export default Link;
