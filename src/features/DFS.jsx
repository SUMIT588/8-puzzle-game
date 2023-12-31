import { ArcherContainer, ArcherElement } from "react-archer";

import Board from "../components/Board";
import Header from "../components/Header";
import generatePossibleState from "../utils/performLUDR";
import { initialState } from "../data/data";
import { useState } from "react";

const DFS = () => {
  const [stateArray, setStateArray] = useState([[initialState]]);
  const [showGenerateButton, setShowGenerateButton] = useState(true);

  const reset = () => {
    setStateArray([[initialState]]);
    setShowGenerateButton(true);
  };

  const generate = () => {
    const result = generatePossibleState(stateArray[0][0]);
    setStateArray(result);
    setShowGenerateButton(false);
  };

  return (
    <div>
      <Header
        generatePossibleState={generate}
        reset={reset}
        showGenerateButton={showGenerateButton}
      />

      <ArcherContainer strokeColor="blue" startMarker={true} endMarker={false} svgContainerStyle={{width: '1000%'}} >
        <div className="states-container">
          {stateArray.map((states, i) => (
            <div key={i}>
              {states.map((item, j) => (
                <div className="state-container" key={j}>
                  <ArcherElement
                    id={item.id}
                    relations={[
                      {
                        targetId: item.parentId,
                        sourceAnchor: "left",
                        targetAnchor: "right",
                        label: item.transition,
                        style: { strokeWidth:1,
                        },
                        startMarker: true,
                      },
                    ]}
                  >
                    <div>
                      <Board state={item} />
                    </div>
                  </ArcherElement>
                  <h5 className="label">{item.count}</h5>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ArcherContainer>
    </div>
  );
};

export default DFS;
