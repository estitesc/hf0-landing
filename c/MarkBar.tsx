import * as React from "react";
import useWindow from "../h/useWindow";
import WordMark from "./WordMark";

const MarkBar: React.FC = () => {
  const { width, height, isDesktop } = useWindow();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        backgroundColor: "#F9F7F5",
        padding: isDesktop ? "36px 0 36px 72px" : 24,
        borderBottom: "solid 1px black",
      }}
    >
      <WordMark />
    </div>
  );
};

export default MarkBar;
