import React, { useState } from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: "Bangalore" },
    { id: 2, name: "Delhi" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Chennai" },
    { id: 5, name: "Kolkata" },
    { id: 6, name: "Hyderabad" },
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    setQuery({ q: city });
    setSelectedCity(city);
  };

  return (
    <div className="flex flex-wrap items-center justify-center my-6 space-x-4">
      {cities.map((city) => (
        <button
          key={city.id}
          className={`text-lg font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform ${
            selectedCity === city.name
              ? "bg-blue-500 text-white shadow-md scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white hover:shadow-lg"
          }`}
          onClick={() => handleCityClick(city.name)}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
