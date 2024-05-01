import Cart from "./Cart";
import User from "./User";
import { useState } from "react";

function App() {
  const myName = "Bakibillah Sakib";
  const multiply = (a, b) => a * b;
  const specialClass = "not-simple-class";
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const userInfo = [
    {
      username: "sakibian",
      email: "test@gmail.com",
      location: "BD",
    },
    {
      username: "Nubair",
      email: "nubair@gmail.com",
      location: "Arab",
    },
    {
      username: "Nusair",
      email: "nusair@gmail.com",
      location: "Egypt",
    },
  ];

  const ValidPassword = () => <h1>Valid Password</h1>;
  const InValidPassword = () => <h1>Invalid Password</h1>;

  const Password = ({ isValid }) => {
    // if (isValid) {
    //   return <ValidPassword />;
    // }

    // return <InValidPassword />;

    // Ternary
    return isValid ? <ValidPassword /> : <InValidPassword />;
  };

  const styles = {
    color: "white",
    backgroundColor: "teal",
    padding: "10px",
  };
  // Events
  const handleClick = (a, b) => {
    console.log(a + b);
  };
  const Button = () => {
    return <button onClick={() => handleClick(2, 2)}>Click</button>;
  };

  const Copy = () => {
    const copyHandler = () => {
      console.log("stop copying my content!!!");
      console.log("Yo!! stop stealing my content!!!");
    };
    return (
      <>
        <p onCopy={copyHandler}>
          TLDRLoongson's CPUs have decent performance per clock but struggle
          with low clock speeds, core count deficit, and software optimization.
          Their most recent 3A5000 and 3A6000 CPUs continue this trend.{" "}
        </p>
      </>
    );
  };

  const Movie = () => {
    const mouseHandler = () => {
      console.log("You hoover me!!");
    };
    return (
      <>
        <p onMouseMove={mouseHandler}>
          TLDRLoongson's CPUs have decent performance per clock but struggle
          with low clock speeds, core count deficit, and software optimization.
          Their most recent 3A5000 and 3A6000 CPUs continue this trend.{" "}
        </p>
      </>
    );
  };

  // States
  const Counter = () => {
    const [count, setCount] = useState(0);
    const [username, setUsername] = useState("Unknown");
    const [friends, setFriends] = useState(["Nubair", "Nusair"]);
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };

    const changeName = () => {
      setUsername("Bakibillah Sakib");
    };

    // Change array states by using useState hooks

    const addOne = () => setFriends([...friends, "Sakib"]);

    const removeOne = () => setFriends(friends.filter((f) => f !== "Nusair"));

    const updateOne = () =>
      setFriends(
        friends.map((f) => (f === "Nubair" ? "Syed Hadibillah Nubair" : f))
      );

    // 2:19:49

    return (
      <>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <h4>{username}</h4>
        <button onClick={changeName}>changeName</button>
        {friends.map((f) => (
          <li key={Math.random()}>{f}</li>
        ))}
        <button onClick={addOne}>Add One</button>
        <button onClick={removeOne}>Remove One</button>
        <button onClick={updateOne}>Update One</button>
      </>
    );
  };
  return (
    <>
      <Counter />
      <h1>{myName}</h1>
      <p>2 * 2 = {2 * 2}</p>
      <p>My Friend List: {["Ammar", "Nasif", "Nafis"]}</p>
      <p>4 * 4 = {multiply(4, 4)}</p>
      <p className={specialClass}>This is a special class </p>
      {numbers.map((number) => (
        <ul key={Math.random()}>
          <li>{number}</li>
        </ul>
      ))}

      {userInfo.map((user) => (
        <ul key={Math.random()}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}

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
      {/* 1:31:37 */}
      <h1
        style={{
          color: styles.color,
          backgroundColor: styles.backgroundColor,
          padding: styles.padding,
        }}
      >
        Hello I'm React
      </h1>
      {/* <div>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
      <h1 class="text-3xl font-bold underline text-orange-800">Hello world!</h1> */}
      <Button />

      <Copy />
      <Movie />
    </>
  );
}

export default App;
