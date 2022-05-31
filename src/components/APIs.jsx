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
      "X-RapidAPI-Key": "e71ebc51c6mshca00d73c78e6902p19258fjsn376d240cbe35",
    },
  });

  return data;
};
