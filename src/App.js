import "./App.css";
import { useEffect, useState } from "react";
import Container from "./Container/Container";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
      );
      const data = await res.json();
      const values = Object.values(data);
      setPosts(values[1]);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Container data={posts} />
    </div>
  );
}

export default App;
