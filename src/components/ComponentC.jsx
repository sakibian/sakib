import React from "react";
import { Data, Data1 } from "./PropDrilling";

import { useContext } from "react";

function ComponentC() {
  const name = useContext(Data);
  const age = useContext(Data1);

  return (
    <>
      <h1>
        My name is {name} & I'm {age} years OLD
      </h1>
      {/* <Data.Consumer>
        {(name) => {
          //   return <h1>My name is : {name}</h1>;
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <h1>
                    My name is: {name} & I'm {age} years old.
                  </h1>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer> */}
    </>
  );
}

export default ComponentC;
