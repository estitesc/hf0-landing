import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const EmailForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mgedndyo");
  if (state.succeeded) {
    return <p>we&apos;ll keep you in the loop.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 24,
        }}
      >
        <input
          style={{
            padding: "12px 12px",
            height: 40,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            border: "none",
            backgroundColor: "#F9F7F5",
            width: "40vw",
            maxWidth: 200,
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
            height: 40,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            color: "black",
            borderWidth: 0,
            padding: "12px 12px",
            cursor: "pointer",
            width: "45vw",
            maxWidth: 200,
          }}
        >
          stay updated
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
