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
      "X-RapidAPI-Key": "5fb1978683msh82118b802984d83p10f722jsn9b9b5a2d80cc",
    },
  });

  return data;
};
