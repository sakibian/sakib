// 1.Import(createContext)
import { createContext } from "react";
import React from "react";
import C from "./ComponentC";

// 2.Creating instance of (createContext)
export const Data = createContext();
export const Data1 = createContext();

function PropDrilling() {
  // Context API
  // useContext() hook
  const name = "Sakib";
  const age = 30;
  return (
    // 3. Wrap our component into Provider Component
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <C />
        </Data1.Provider>
      </Data.Provider>
      {/* <A name={name} /> */}
      {/* <B /> */}
    </div>
  );
}

export default PropDrilling;
