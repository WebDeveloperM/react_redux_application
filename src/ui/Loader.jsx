import React from "react";

function Loader(props) {
  return (
    <div class="spinner-grow text-info d-block mx-auto my-4" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loader;
