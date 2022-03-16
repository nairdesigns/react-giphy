import React, { useState } from "react"; // user === Hook
import Gif from "./Gif";
import SearchBar from "./SearchBar";
import GifList from "./GifList";

const App = () => {
  const [selectedID, setSelectedID] = useState("gG6OcTSRWaSis");
  const [gifIDs, setGifIDs] = useState([
    "WuGSL4LFUMQU",
    "HuVCpmfKheI2Q",
    "u6uAu3yyDNqRq",
  ]);
  // const selectedID = "gG6OcTSRWaSis";
  // const gifIDs = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifID={selectedID} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifIDs} setSelectedID={setSelectedID} />
      </div>
    </div>
  );
};

export default App;
