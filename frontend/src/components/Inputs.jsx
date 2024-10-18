// import { useState } from "react";
// import { BiSearch, BiCurrentLocation } from "react-icons/bi";

// const Inputs = ({ setQuery, setUnits, setThreshold }) => {
//   const [city, setCity] = useState("");
//   const [thre,setThre]=useState();

//   const handleSearchClick = () => {
//     if (city !== "") setQuery({ q: city });
//   };

//   const handleThreSHold=()=>{
//     setThreshold(thre);
//   }

//   const hanldeLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         setQuery({ lat: latitude, lon: longitude });
//       });
//     }
//   };



//   return (
//     <>
//       <div className="flex flex-row justify-center my-6">
//         <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
//           <input
//             value={city}
//             onChange={(e) => setCity(e.currentTarget.value)}
//             type="text"
//             placeholder="search by city..."
//             className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
//           />

//           <BiSearch
//             size={30}
//             className="cursor-pointer transition ease-out hover:scale-125"
//             onClick={handleSearchClick}
//           />
//           <BiCurrentLocation
//             size={30}
//             className="cursor-pointer transition ease-out hover:scale-125"
//             onClick={hanldeLocationClick}
//           />
//         </div>

//         <div className="flex flex-row w-1/4 items-center justify-center">
//           <button
//             className="text-2xl font-medium transition ease-out hover:scale-125"
//             onClick={() => setUnits("metric")}
//           >
//             °C
//           </button>
//           <p className="text-2xl font-medium mx-1">|</p>

//           <button
//             className="text-2xl font-medium transition ease-out hover:scale-125"
//             onClick={() => setUnits("")}
//           >
//             °k
//           </button>

//         </div>
//       </div>
//       <div className="flex justify-center items-center\">
//         <input
//           value={thre}
//           onChange={(e) => setThre(e.currentTarget.value)}
//           type="text"
//           placeholder="ThreShold temp..."
//           className="text-gray-500 text-xl font-light p-2 w-26 shadow-xl capitalize focus:outline-none placeholder:lowercase"
//         />
//         <button
//           onClick={handleThreSHold}
//         className="mx-8 white text-black bg-white rounded-full w-40 h-10 transition ease-out   hover:scale-125"> set ThreShold </button>
//       </div>
//     </>
//   );
// };

// export default Inputs;
import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits, setThreshold }) => {
  const [city, setCity] = useState("");
  const [thre, setThre] = useState();

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleThreSHold = () => {
    setThreshold(thre);
  };

  const hanldeLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <>
      {/* Search and Units */}
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="Search by city..."
            className="text-gray-700 text-lg font-light p-3 w-full rounded-md shadow-lg focus:outline-none placeholder-gray-400"
          />
          <BiSearch
            size={30}
            className="text-gray-600 cursor-pointer transition ease-out hover:scale-110 hover:text-black"
            onClick={handleSearchClick}
          />
          <BiCurrentLocation
            size={30}
            className="text-gray-600 cursor-pointer transition ease-out hover:scale-110 hover:text-black"
            onClick={hanldeLocationClick}
          />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center space-x-3">
          <button
            className="text-xl font-medium text-gray-600 hover:text-blue-500 transition ease-out hover:scale-110"
            onClick={() => setUnits("metric")}
          >
            °C
          </button>
          <p className="text-xl font-medium text-gray-400">|</p>
          <button
            className="text-xl font-medium text-gray-600 hover:text-blue-500 transition ease-out hover:scale-110"
            onClick={() => setUnits("")}
          >
            °K
          </button>
        </div>
      </div>

      {/* Threshold Section */}
      <div className="flex justify-center items-center mt-4">
  <input
    value={thre}
    onChange={(e) => setThre(e.currentTarget.value)}
    type="text"
    placeholder="Threshold temperature..."
    className="text-gray-700 text-lg font-light p-3 w-1/4 rounded-md shadow-lg focus:outline-none placeholder-gray-400"
  />
  <button
    onClick={handleThreSHold}
    className="ml-4 bg-gray-500 text-white w-36 h-10 text-lg font-medium transition ease-out hover:bg-gray-600"
    style={{ borderRadius: '0px' }} // Makes the button square
  >
    Set Threshold
  </button>
</div>
    </>
  );
};

export default Inputs;
