import { useEffect, useState } from "react";

import axios from 'axios';
export const useFetchGifs = ({ category }) => {

  const apiKey = 'O00QaM4LSg3DVrx2MLEW3uNgYCJDVV4k';
  const searchTerm = 'gatos'; 

  const usefetchGifs = async () => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          q: searchTerm,
          api_key: apiKey,
          limit: 10, 
        },
      });
      console.log(response.data.data); 
    } catch (error) {
      console.error(error);
    }
  };
}
