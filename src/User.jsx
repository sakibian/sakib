import React from "react";

// function User(props) {
//   return (
//     <>
//       <img src={props.img} alt={props.name} />
//       <h1>Name: {props.name}</h1>
//       <h3>Hobbies: {props.hobbies}</h3>
//       <p>{props.realData.name}</p>
//       <p>{props.realData.location}</p>
//     </>
//   );
// }

// Destructuring
function User({ img, name, hobbies, children }) {
  return (
    <>
      <img src={img} alt={name} />
      <h1>Name: {name}</h1>
      <h3>Hobbies: {hobbies}</h3>
      {children}
    </>
  );
}

export default User;
