import React from "react";

function Loader(props) {
  return (
    <div className="spinner-grow text-info d-block mx-auto my-4" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loader;
