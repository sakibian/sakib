import React from "react";

function Basic() {
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
  return (
    <div>
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
    </div>
  );
}

export default Basic;
