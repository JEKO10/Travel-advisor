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
        "X-RapidAPI-Key": "1d8c6cdab6msh7695c30140e72b7p1f237fjsn004d69a1c518",
      },
    }
  );

  return data;
};
