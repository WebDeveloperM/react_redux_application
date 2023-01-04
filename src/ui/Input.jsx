import React, { useState } from "react";

function Input({ label, state, setState, type='text' }) {
  return (
    <div className="form-floating mb-1">
      <input
        type={type}
        className="form-control "
        id="floatingPassword"
        placeholder={label}
        value={state}
        onChange={e=>setState(e.target.value)}
      />
      <label for="floatingPassword">{label}</label>
    </div>
  );
}

export default Input;
