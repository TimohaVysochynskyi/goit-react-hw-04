import axios from "axios";

export const fetchImagesWithName = async (input) => {
  const key = "LgEJMlPtj45ehpjX1w-g9fwiUnOts9GADVVkarCccjk";
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=${key}`
  );

  const result = response.data.results;

  return result;
};
