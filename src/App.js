import Cart from "./Cart";
import User from "./User";
import Basic from "./components/Basic";
import Password from "./components/Password";
import Events from "./components/Events";
import Styling from "./components/Styling";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Basic />
      <User
        img="https://avatars.githubusercontent.com/u/40847839?v=4"
        name="Bakibillah Sakib"
        age={30}
        hobbies={["coding", "sleeping", "movies"]}
      >
        <h1>Hello I'm a children</h1>
      </User>
      <Password isValid={false} />
      <Cart />
      <Styling />
      <Events />
      <Counter />
    </>
  );
}

export default App;
