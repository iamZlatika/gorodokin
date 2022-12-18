import React from "react";

const EasyWeek = () => {
  const iframeStyle = {
    border: "0",
    display: "block",
    width: "100%",
    height: "100vh",
    // height: "-webkit-fill-available",
  };
  return (
    <div id="check-in">
      <iframe src="https://widget.easyweek.io/gorodokin-anton" style={iframeStyle} frameBorder="0"></iframe>;
    </div>
  );
};

export default EasyWeek;
