import React from "react";
import { Link } from "react-router-dom";

const NavigationSub = ({ list }) => {
  return (
    <>
      <div className="nav-sub">
        {list.map((info, i) => (
          <div className={"nav-block nav-ani-" + i} key={i}>
            {info.dest.startsWith("/") ? (
              <Link className="nav-btn" to={info.dest}>
                {"> " + info.msg}
              </Link>
            ) : (
              <a className="nav-btn" href={info.dest !== "" ? info.dest : "#"}>
                > {info.msg}
              </a>
            )}
            {Array.isArray(info.sub) && info.sub.length === 0 ? (
              ""
            ) : (
              <NavigationSub list={info.sub} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default NavigationSub;
