import axios from "axios";

const key = "LgEJMlPtj45ehpjX1w-g9fwiUnOts9GADVVkarCccjk";

export const fetchImagesWithName = async (input, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: input,
      client_id: key,
      page: page,
    },
  });

  const result = response.data.results;

  return result;
};
