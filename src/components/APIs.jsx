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
      "X-RapidAPI-Key": "d209b5a9afmshfb03a87406bc9f7p199200jsn94fc8b167630",
    },
  });

  return data;
};
