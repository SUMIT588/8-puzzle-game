import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";

const Header = ({ generatePossibleState, reset, showGenerateButton }) => {
  const { algorithm, setAlgorithm } = useContext(GlobalContext);

  const handleChange = (e) => {
    setAlgorithm(e.target.value);
  };

  return (
    <div className="content">
      <div className="title-wrapper">
        <h2 className="title">{`${
          algorithm === "bfs"
            ? `Breath First Search`
            : algorithm === "dfs"
            ? `Depth First Search`
            : ``
        }`}</h2>
        <h3>{`${
          algorithm === "bfs"
            ? `Explores all nodes at the present depth prior to moving on to the nodes at the next depth level`
            : algorithm === "dfs"
            ? `Explores as far as possible along each branch before backtracking`
            : `A-Star`
        }`}</h3>
      </div>
      <div>
        {showGenerateButton && (
          <button className="button" onClick={generatePossibleState}>
            {algorithm === "bfs" || algorithm === "aStar" ? "Next" : "Generate"}
          </button>
        )}
        <button
          className="button"
          style={{ backgroundColor: "#800080" }}
          onClick={reset}
        >
          Reset
        </button>
      </div>

      <div className="toggle-switch">
        <FormControl sx={{ display: "flex", alignItems: "center" }}>
          <h4 sx={{ fontWeight: 600 }}>Algorithm</h4>
          <RadioGroup
            value={algorithm}
            onChange={handleChange}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel value="bfs" control={<Radio />} label="BFS" />
            <FormControlLabel value="dfs" control={<Radio />} label="DFS" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Header;
