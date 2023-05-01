import React, { useState } from "react";

function WatchButton() {
  const [watched, setWatched] = useState(false);

  const handleClick = () => {
    setWatched(!watched);
  };

  return (
    <button
      className={`btn ${watched ? "btn-success" : "btn-primary"}`}
      onClick={handleClick}
    >
      {watched ? "Assistir novamente" : "Assistir"}
    </button>
  );
}

export default WatchButton;