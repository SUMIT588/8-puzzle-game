import { useContext, useEffect } from "react";

import BFS from "./features/BFS";
import DFS from "./features/DFS";
import GlobalContext from "./context/GlobalContext";

const App = () => {
  const { algorithm } = useContext(GlobalContext);

  useEffect(() => {
    const originalWarn = console.warn;
    console.warn = function () {};
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return (
    <div className="container">
      {algorithm === "bfs" && <BFS />}
      {algorithm === "dfs" && <DFS />}
    </div>
  );
};

export default App;
