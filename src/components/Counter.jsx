import React from "react";
import { useEffect, useState } from "react";
function Counter() {
  const [username1, setUsername1] = useState("");
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setUsername1(event.target.value);
    setUsername1("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`You typed: ${username1}`);
  };

  // 2:33:06
  // useEffect Hooks state

  // 1. Render for the (first time)
  // 2. anytime we do (side effect)
  // 3. Dependency List/array

  useEffect(() => {
    if (value > 0) {
      console.log("hello");
      document.title = `Increment (${value})`;
    }

    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }

    getData();
  }, []); // try with set value = [value]

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={Math.random()}>{item.title}</li>
        ))}
      </ul>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click me</button>
      <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username1} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Counter;
