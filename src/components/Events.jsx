import React from "react";

function Events() {
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
  return (
    <div>
      <Button />
      <Movie />
      <Copy />
    </div>
  );
}

export default Events;
