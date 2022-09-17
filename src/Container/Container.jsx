import React from "react";
import "./container.css";

export default function Container({ data }) {
  console.log(data);

  return (
    <div className="table-container">
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((item, i) => (
              <tr key={i}>
                <td>{[item]}</td>
                <td>{data[item]["1. open"]}</td>
                <td>{data[item]["2. high"]}</td>
                <td>{data[item]["3. low"]}</td>
                <td>{data[item]["4. close"]}</td>
                <td>{data[item]["5. volume"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
