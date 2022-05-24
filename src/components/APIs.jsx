// import axios from "axios";

const baseUrl =
  "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km";

// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "x-rapidapi-key": "689bdba840msh627580b0402dd16p1bbcc9jsn0188595ae046",
//     "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//   },
// };

// export const getPlaces = async () => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(baseUrl, options);

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    "X-RapidAPI-Key": "689bdba840msh627580b0402dd16p1bbcc9jsn0188595ae046",
  },
};

export const getPlaces = async () => {
  const response = await fetch(baseUrl, options);
  const data = await response.json();

  return data;
};
