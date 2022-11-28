import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const EmailForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mgedndyo");
  if (state.succeeded) {
    return <p>we&apos;ll keep you in the loop.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{
          padding: "12px 12px",
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
          border: "none",
          backgroundColor: "#F9F7F5",
        }}
        id="email"
        type="email"
        name="email"
        placeholder="me@mail.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        onClick={() => {}}
        style={{
          backgroundColor: "#78C1DD",
          fontFamily: "Inter",
          fontSize: 12,
          marginTop: 24,
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          color: "black",
          borderWidth: 0,
          padding: "12px 36px",
          cursor: "pointer",
        }}
      >
        keep me posted
      </button>
    </form>
  );
};

export default EmailForm;
