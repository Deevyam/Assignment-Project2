import { useEffect, useState } from "react";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: "ahmedabad" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [threshold, setThreshold] = useState(35);
  const [cityName, setCityName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);
    setCityName(cityName);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);

      // Set background image based on weather details
      const weatherCondition = data.details.toLowerCase();

      if (weatherCondition.includes("clear")) {
        setBackgroundImage("url('https://wallpapercave.com/wp/UAk3xHU.jpg')");
      } else if (weatherCondition.includes("clouds")) {
        setBackgroundImage("url('https://wallpapercave.com/wp/UAk3xHU.jpg')");
      } else if (weatherCondition.includes("rain")) {
        setBackgroundImage("url('https://wallpapercave.com/wp/UAk3xHU.jpg')");
      } else if (weatherCondition.includes("snow")) {
        setBackgroundImage("url('https://wallpapercave.com/wp/UAk3xHU.jpg)");
      } else {
        setBackgroundImage("url('https://wallpapercave.com/wp/UAk3xHU.jpg')");
      }
    });
  };

  useEffect(() => {
    getWeather();
    const intervalId = setInterval(() => {
      getWeather();
    }, 300000); // Update every 5 minutes
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold2 = units === "metric" ? 20 : 60;
    
    if (weather.temp > threshold) toast.warn(`Temperature exceeded threshold in ${cityName}`);
    
    return "from-yellow-600 to-orange-700"; // Default background gradient when no specific condition is set
  };

  return (
    <div
      className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out", // Smooth transition
      }}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} setThreshold={setThreshold} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App;
