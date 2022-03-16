import React from "react";
import Gif from "./Gif";

const GifList = ({ gifIDs, setSelectedID }) => {
  return (
    <div className="gif-list">
      {gifIDs.map((id) => (
        <Gif gifID={id} key={id} setSelectedID={setSelectedID} />
      ))}
    </div>
  );
};

export default GifList;
