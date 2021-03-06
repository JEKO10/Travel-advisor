import axios from "axios";

export const getPlaces = async (type, sw, ne) => {
  const {
    data: { data },
  } = await axios.get(
    `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
    {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_TRAVEL_API_KEY,
      },
    }
  );

  return data;
};
