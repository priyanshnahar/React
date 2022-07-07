import React, { useEffect, useState } from "react";
import "./App.css";

export default function Table() {
  const [data, setData] = useState([]);
  async function record() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const js = await result.json();
    setData(js);
  }
  useEffect(() => {
    record();
  }, []);
  console.log(data);

  return (
    <table className="table">
      <tr>
        <th>User Id</th>
        <th>ID</th>
        <th>Title</th>
        <th>BODY</th>
      </tr>
      {data.map((item) => (
        <tr>
          <td>{item.userId}</td>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
        </tr>
      ))}
    </table>
  );
}
