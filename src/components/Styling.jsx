import React from "react";

function Styling() {
  const styles = {
    color: "white",
    backgroundColor: "teal",
    padding: "10px",
  };
  return (
    <div>
      <h1
        style={{
          color: styles.color,
          backgroundColor: styles.backgroundColor,
          padding: styles.padding,
        }}
      >
        Hello I'm React
      </h1>
    </div>
  );
}

export default Styling;
