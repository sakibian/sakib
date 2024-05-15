import React from "react";
// import { useRef } from "react";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
function UseRef() {
  // const inputElement = useRef(null);
  // const focusInput = () => {
  //   console.log(inputElement);
  //   inputElement.current.focus();
  //   inputElement.current.value = "Sakib";
  // };

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      <ul>
        {data &&
          data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
      </ul>
      {/* <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & Write Sakib</button> */}
    </div>
  );
}

export default UseRef;
