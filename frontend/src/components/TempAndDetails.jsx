// import { FaThermometerEmpty } from "react-icons/fa";
// import { BiSolidDropletHalf } from "react-icons/bi";
// import { FiWind } from "react-icons/fi";
// import { GiSunrise, GiSunset } from "react-icons/gi";
// import { MdKeyboardArrowUp, MdKeyboardArrowDown , MdKeyboardArrowRight } from "react-icons/md";

// const TempAndDetails = ({
//   weather: {
//     details,
//     icon,
//     temp,
//     temp_min,
//     temp_max,
//     sunrise,
//     sunset,
//     speed,
//     humidity,
//     feels_like,
//   },
//   units,
// }) => {
//   const verticalDetails = [
//     {
//       id: 1,
//       Icon: FaThermometerEmpty,
//       title: "Real Feel",
//       value: `${feels_like.toFixed()}°`,
//     },
//     {
//       id: 2,
//       Icon: BiSolidDropletHalf,
//       title: "Humidity",
//       value: `${humidity.toFixed()}%`,
//     },
//     {
//       id: 3,
//       Icon: FiWind,
//       title: "Wind",
//       value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
//     },
//   ];
//   const horizontalDetails = [
//     {
//       id: 1,
//       Icon: GiSunrise,
//       title: "Sunrise",
//       value: sunrise,
//     },
//     {
//       id: 2,
//       Icon: GiSunset,
//       title: "Sunset",
//       value: sunset,
//     },
//     {
//       id: 3,
//       Icon: MdKeyboardArrowUp,
//       title: "High",
//       value: `${temp_max.toFixed()}°`,
//     },
//     {
//       id: 4,
//       Icon: MdKeyboardArrowDown,
//       title: "Low",
//       value: `${temp_min.toFixed()}°`,
//     },
//     {
//       id:5,
//       Icon:MdKeyboardArrowRight,
//       title:"Average",
//       value:`${((temp_min+temp_max)/2).toFixed()}`
//     }
//   ];
//   return (
//     <div>
//       <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
//         <p>{details}</p>
//       </div>

//       <div className="flex flex-row items-center justify-between py-3">
//         <img src={icon} alt="weather icon" className="w-20" />
//         <p className="text-5xl">{`${temp.toFixed()}°`}</p>

//         <div className="flex flex-col space-y-3 items-start">
//           {verticalDetails.map(({ id, Icon, title, value }) => (
//             <div
//               key={id}
//               className="flex font-light text-sm items-center justify-center"
//             >
//               <Icon size={18} className="mr-1" />
//               {`${title}: `}
//               <span className="font-medium ml-1">{value}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
//         {horizontalDetails.map(({ id, Icon, title, value }) => (
//           <div key={id} className="flex flex-row items-center">
//             <Icon size={30} />
//             <p className="font-light ml-1">
//               {`${title}: `}
//               <span className="font-medium ml-1">{value}</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TempAndDetails;
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const TempAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
    {
      id: 5,
      Icon: MdKeyboardArrowRight,
      title: "Average",
      value: `${((temp_min + temp_max) / 2).toFixed()}°`,
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {/* Weather details text */}
      <div className="flex items-center justify-center py-4">
        <p className="text-2xl text-gray-700 font-semibold">{details}</p>
      </div>

      {/* Main temperature and icon section */}
      <div className="flex flex-row items-center justify-between py-6">
        <img src={icon} alt="weather icon" className="w-24 h-24" />
        <p className="text-6xl text-gray-800 font-bold">{`${temp.toFixed()}°`}</p>

        {/* Vertical details: Real Feel, Humidity, Wind */}
        <div className="flex flex-col space-y-4 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex items-center text-lg text-gray-600">
              <Icon size={22} className="mr-2 text-gray-500" />
              <span className="font-semibold">{title}:</span>
              <span className="ml-2 text-gray-700">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal details: Sunrise, Sunset, High, Low, Average */}
      <div className="flex flex-row items-center justify-around py-4 text-lg text-gray-600">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-col items-center text-center">
            <Icon size={28} className="text-gray-500" />
            <p className="font-semibold mt-2">{title}:</p>
            <span className="text-gray-700">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
