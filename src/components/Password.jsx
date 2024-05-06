import React from "react";

function Password({ isValid }) {
  const ValidPassword = () => <h1>Valid Password</h1>;
  const InValidPassword = () => <h1>Invalid Password</h1>;

  const Password = () => {
    // if (isValid) {
    //   return <ValidPassword />;
    // }
    // return <InValidPassword />;
    // Ternary
  };
  return isValid ? <ValidPassword /> : <InValidPassword />;
}

export default Password;
