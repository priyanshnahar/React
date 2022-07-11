import react, { useState, useEffect } from "react";

const useFetch = ({ url }) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    setError(false);

    try {
      const ans = await fetch(url);
      const js = ans.json();
      setResponse(js);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return [{ response, loading, error }, fetchdata];
};

export default useFetch;
