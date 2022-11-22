import * as React from "react";
import WordMark from "./WordMark";

const MarkBar: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        backgroundColor: "#F9F7F5",
        padding: 24,
        borderBottom: "solid 1px black",
      }}
    >
      <WordMark />
    </div>
  );
};

export default MarkBar;
