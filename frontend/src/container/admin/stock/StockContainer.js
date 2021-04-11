import React, { useState, useEffect } from "react";

import Config from "_variables";

import "./Stock.scss";

const option = {
  container_id: "watchlist",
  interval: "D",
  timezone: "exchange",
  theme: "dark",
  symbol: "KOSPI",
  allow_symbol_change: true,
  watchlist: [
    "053280", // yes24
    "ADT",
    "FOXA",
    "CCL",
    "AAPL",
  ],
  details: true,
  hotlist: true,
  calendar: true,
  locale: "kr",
};

const StockContainer = () => {
  const [stock, setStock] = useState({
    status: 0,
    result: [],
    msg: "로딩중",
  });
  const [ticker, setTicker] = useState("");
  const handleChange = (event) => setTicker(event.target.value);

  const getStock = async () => {
    let result = await (await fetch(Config.API_URL + "/stock/status")).json();
    if (result.status === 200) {
      setTicker("");
      setStock(result);
    }
  };

  const updateStock = async () => {
    let result = await (
      await fetch(Config.API_URL + "/stock/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol: ticker }),
      })
    ).json();
    if (result.status === 200) getStock();
  };

  const deleteStock = async (symbol) => {
    let result = await (
      await fetch(Config.API_URL + "/stock/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol }),
      })
    ).json();
    if (result.status === 200) getStock();
    console.log(symbol);
  };

  useEffect(() => {
    getStock();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = "async";
    option.watchlist = stock.result.map((i) => i.symbol);
    script.innerHTML = "new TradingView.widget(" + JSON.stringify(option) + ")";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [stock]);

  return (
    <>
      <div className="tradingview-widget-container">
        <div id="watchlist"></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener" target="_blank">
            Chart by TradingView
          </a>
        </div>
      </div>
      <div className="stock-list">
        {stock.result.map((i, idx) => (
          <div className="stock-block" key={idx}>
            <span className="stock-name"> {i.symbol} </span>
            <span
              className="stock-remove stock-btn"
              onClick={deleteStock.bind(this, i.symbol)}
            >
              X
            </span>
          </div>
        ))}
        <input type="text" value={ticker} onChange={handleChange} />
        <span className="stock-block stock-btn" onClick={updateStock}>
          추가
        </span>
      </div>
    </>
  );
};

export default StockContainer;
