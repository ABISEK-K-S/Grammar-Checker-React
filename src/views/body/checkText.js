import React from "react";

function CheckText(props) {
  return (
    <div className="button" onClick={() => props.verifyContent()}>
      CHECK{" "}
    </div>
  );
}

export default CheckText;
