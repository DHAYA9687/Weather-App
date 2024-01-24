import axios from "axios";
import React from "react";
import "./App.css";
const App = () => {
  const key = "1d6b4beaa8c53a23f48319f7c22cc311";
  const [data, setData] = React.useState("");
  const [city, setCity] = React.useState("");

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      setData(response.data);
    } catch (error) {
      alert("please enter the correct city name");
    }
  };
  console.log(data);
  return (
    <>
      <h1>weather Station</h1>
      <input
        type="text"
        placeholder="Enter the city name"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button onClick={fetchdata}>Search</button>
      <div>
        {data && (
          <>
            <h1>City name:{data.name} </h1>
            <h1>Temp:{data.main.temp}℃</h1>
            <h1>Description:{data.weather[0].description}</h1>
            <h2>
              position: lon_{Math.round(data.coord.lon)},lat_
              {Math.round(data.coord.lat)}
            </h2>
          </>
        )}
      </div>
    </>
  );
};
export default App;
