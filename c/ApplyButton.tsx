import * as React from "react";

const ApplyButton: React.FC = () => {
  return (
    <a
      href="https://www.surveymonkey.com/r/QZRYL72"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        onClick={() => {}}
        style={{
          backgroundColor: "#78C1DD",
          fontFamily: "Inter",
          fontSize: 14,
          marginTop: 24,
          borderRadius: 8,
          color: "black",
          borderWidth: 0,
          padding: "12px 36px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>
    </a>
  );
};

export default ApplyButton;
