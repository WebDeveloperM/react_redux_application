import React, { useCallback } from "react";
import { useSelector } from "react-redux";
function ValidationError() {
  const { error } = useSelector((state) => state.auth);
  console.log(error);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} - ${msg}`;
    });
  }, [error]);

  return (
    error !== null &&
    errorMessage().map((error) => (
      <div key={error} class="alert alert-danger m-1 p-0" role="alert">
        {error}
      </div>
    ))
  );
}

export default ValidationError;
