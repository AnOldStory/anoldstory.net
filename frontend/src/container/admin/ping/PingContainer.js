import React, { useState, useEffect } from "react";

import Config from "_variables";

import "./Ping.scss";

const PingContainer = () => {
  const [list, setList] = useState({ status: 0, result: [], msg: "로딩중" });

  const getPing = async () => {
    let result = await (await fetch(Config.API_URL + "/ping/status")).json();
    if (result.status === 200) setList(result);
  };

  /* ComponentDidMount */
  useEffect(() => {
    getPing();
  }, []);

  return (
    <div>
      <div>Ping Page</div>
      <br />
      <table className="styled-table">
        <thead>
          <tr>
            <th>IP</th>
            <th>nickname</th>
          </tr>
        </thead>
        <tbody>
          {list.result.map((info, i) => {
            return (
              <tr key={i}>
                <td>{info.senderIp} </td>
                <td>{info.nickname} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PingContainer;
//
