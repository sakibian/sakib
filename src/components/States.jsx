import { useState } from "react";

function States() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Unknown");
  const [friends, setFriends] = useState(["Nubair", "Nusair"]);
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    rating: 7,
  });
  const [movies, setMovies] = useState([
    { id: 1, title: "Spider Man", ratings: 3 },
    { id: 2, title: "Superman", ratings: 6 },
  ]);

  const handleMovieName = () => {
    setMovies(
      movies.map((movie) =>
        movie.id === 1 ? { ...movies, title: "John Wick 4" } : movie
      )
    );
  };

  const handleRatings = () => {
    // const copyMovie = {
    //   ...movie,
    //   rating: 5,
    // };
    setMovie({ ...movie, rating: 5 });
  };

  const changeName = () => {
    setUsername("Bakibillah Sakib");
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  // Change array states by using useState hooks
  const addOne = () => setFriends([...friends, "Sakib"]);

  const removeOne = () => setFriends(friends.filter((f) => f !== "Nusair"));

  const updateOne = () =>
    setFriends(
      friends.map((f) => (f === "Nubair" ? "Syed Hadibillah Nubair" : f))
    );
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.rating}</p>
      <button onClick={handleMovieName}>Change movie name</button>
      <button onClick={handleRatings}>Change ratings</button>
      {movies.map((movie) => (
        <li key={Math.random()}>{movie.title}</li>
      ))}
      <h4>{username}</h4>
      <button onClick={changeName}>changeName</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </div>
  );
}

export default States;
