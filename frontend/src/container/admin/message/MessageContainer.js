import React, { useState, useEffect } from "react";

import Config from "_variables";

import "./Message.scss";

const MessageContainer = () => {
  const [list, setList] = useState({ status: 0, result: [], msg: "로딩중" });

  const getMessage = async () => {
    let result = await (await fetch(Config.API_URL + "/message/status")).json();
    if (result.status === 200) setList(result);
  };

  /* ComponentDidMount */
  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div>
      <div>Message Page</div>
      <br />
      <table className="styled-table">
        <thead>
          <tr>
            <th>type</th>
            <th>sender</th>
            <th>info</th>
          </tr>
        </thead>
        <tbody>
          {list.result.map((info, i) => {
            return (
              <tr key={i}>
                <td>{info.type} </td>
                <td>{info.sender} </td>
                <td>{info.info} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MessageContainer;
//
