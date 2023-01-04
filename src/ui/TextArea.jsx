import React from "react";

function TextArea({ label, state, setState,  height = "100",type = "text" }) {
  return (
    <div className="form-floating mb-1">
      <textarea
        className="form-control"
        placeholder="Leave a comment here"
        value={state}
        onChange={(e) => setState(e.target.value)}
        id="floatingTextarea2"
        style={{ "height": height }}
      ></textarea>
      <label for="floatingPassword">{label}</label>
    </div>
  );
}

export default TextArea;
