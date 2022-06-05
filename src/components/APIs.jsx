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
      limit: "5",
    },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": "e6c3e81f01msh83e2be0f8906363p1656d1jsn6de29720acd4",
    },
  });

  return data;
};
