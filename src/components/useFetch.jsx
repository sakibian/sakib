import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((d) => setData(d));
  });
  return [data];
}

export default useFetch;
