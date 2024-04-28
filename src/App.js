import User from "./User";
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
  const InValidPassword = () => <h1>InValid Password</h1>;

  const Password = ({ isValid }) => {
    if (isValid) {
      return <ValidPassword />;
    }

    return <InValidPassword />;
  };

  return (
    <>
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

      <Password isValid={true} />
      {/* 1:26:12 */}
    </>
  );
}

export default App;
