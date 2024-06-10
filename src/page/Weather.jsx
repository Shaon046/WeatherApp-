import React, {  useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AirIcon from "@mui/icons-material/Air";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Switch from "@mui/material/Switch";
import { styled } from "@mui/material";

import clear from "../assets/clear_sky.jpg";
import axios from "axios";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));


const Weather = () => {
  const [location, setLocation] = useState("");
  const [apiData, setApiData] = useState(null);
  const [theme, setTheme] = useState("light");

  // input handler function
  const inputOnchangeHandler = (eve) => {
    setLocation(eve.target.value);
  };

  // theme change handler

  const themeOnChange = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  };

  // Function to get current time

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }
  // Function to get current date
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  //search button handler
  // API CALL
  const searchOnclickHandler = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=101599b709375b2e22901d4a8d53a5c9`
      );
      setApiData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`h-screen flex justify-center items-center ${
        theme === "light" ? "text-primary-dark" : "text-primary-light"
      }`}
      style={{
        position: "relative",
        backgroundImage: `url(${clear})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for blur effect */}
      <div
        className={`${
          theme === "light" ? "bg-background-light" : "bg-background-dark"
        }`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(5px)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="xs:w-full md:w-2/3 lg:w-1/3 xs:h-screen md:h-auto md:rounded-xl flex flex-col overflow-hidden relative shadow-xl"
        style={{
          zIndex: 2,
          background: "rgba(0, 0, 0, 0.3)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {/* Absolute div */}
        <div className="absolute top-1 right-1 flex justify-center items-center  ">
          {/* Add Button  */}
          {/* <button className="hover:text-blue-200">
            <AddCircleIcon />
          </button> */}
          <MaterialUISwitch
            checked={theme === "dark"}
            onClick={themeOnChange}
          />
        </div>

        {/* Location */}
        <div className="flex flex-col items-center w-full">
          <p
            className={` ${
              apiData && apiData.name.length < 20 ? "text-4xl" : "text-xl"
            } text-4xl text-center font-semibold py-4 px-2 max-w-full truncate`}
          >
            {apiData ? apiData.name : "Please enter a location"}
          </p>
          <div className="bg-slate-200 flex overflow-hidden rounded-lg text-gray-950">
            <input
              type="text"
              className="px-4 py-2 focus:outline-none"
              placeholder="Location"
              onChange={inputOnchangeHandler}
            />
            <button onClick={searchOnclickHandler}>
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* conditional rendering */}
        <div className={`${apiData ? "visible" : "hidden"}  `}>
          {/* Temperature */}
          <div className="flex flex-col items-center py-8">
            <p className="flex font-semibold justify-center">
              <span className="text-6xl">
                {apiData ? apiData.main.temp : 0}
              </span>
              <span className="self-start pt-1">°C</span>
            </p>

            {/* Time And Date */}
            <p className="flex font-semibold pt-1" style={{ fontSize: "12px" }}>
              <span className="flex items-center px-4">
                <CalendarMonthIcon style={{ fontSize: "12px" }} />{" "}
                {getCurrentDate()}
              </span>{" "}
              <span className="flex items-center px-4">
                <AccessTimeIcon style={{ fontSize: "12px" }} />
                {getCurrentTime()}
              </span>
            </p>

            <p className="text-lg pt-2">
              <span>{apiData ? apiData.weather[0].main : ""}</span>
              <span> </span>
        
            </p>
            <div
              className="rounded-full px-4 mt-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.119)" }}
            >
              <span>
                <AirIcon />{" "}
              </span>{" "}
              <span>Wind speed:</span>{" "}
              <span>{apiData ? apiData.wind.speed : ""}</span>
              <span>/{apiData ? apiData.wind.deg : ""}°</span>
            </div>
          </div>

          {/* Other details */}
          <div
            className="flex flex-grow items-center w-[90%] m-auto my-4 rounded-xl xs:py-8 md:p-1 xs:text-lg md:text-md transition-all duration-600  "
            style={{ backgroundColor: "rgba(255, 255, 255, 0.119)" }}
          >
            <table className="w-full ">
              <tbody>
                <tr>
                  <td className="w-1/2 text-start px-4">Description</td>
                  <td className="w-1/2 text-end px-4">
                    {apiData ? apiData.weather[0].description : ""}
                  </td>
                </tr>

                <tr>
                  <td className="w-1/2 text-start px-4">Feels like</td>
                  <td className="w-1/2 text-end px-4">
                  {apiData ?` ${apiData.main.feels_like }°C`: ""}
                  </td>
                </tr>
                <tr className="py-1">
                  <td className="w-1/2 text-start px-4">Min temperature </td>
                  <td className="w-1/2 text-end px-4">
                    {apiData ? `${apiData.main.temp_min}°C` : ""}
                  </td>
                </tr>

                <tr className="py-1">
                  <td className="w-1/2 text-start px-4">Min temperature </td>
                  <td className="w-1/2 text-end px-4">
                    {apiData ? `${apiData.main.temp_max}°C ` : ""}
                  </td>
                </tr>
                <tr className="py-1">
                  <td className="w-1/2 text-start px-4">Humidity</td>
                  <td className="w-1/2 text-end px-4">
                    {apiData ? `${apiData.main.humidity}%` : ""}
                  </td>
                </tr>


              
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
