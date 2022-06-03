import axios from "axios";

const baseUrl =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlaces = async (sw, ne) => {
  const {
    data: { data },
  } = await axios.get(baseUrl, {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": "e1c7eb1eb1mshee37345cbb13d17p161328jsnd844a2fdbe24",
    },
  });

  return data;
};
