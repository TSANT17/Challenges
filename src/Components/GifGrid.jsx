import { useEffect, useState } from "react";
import axios from "axios";
import { GifItem } from "./GifItem";

export const GifGrid = () => {
  const apiKey = "O00QaM4LSg3DVrx2MLEW3uNgYCJDVV4k";
  const searchTerm = "gatos";
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async () => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          q: searchTerm,
          api_key: apiKey,
          limit: 10,
        },
      });
      setGifs(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={fetchGifs}>Buscar GIFs</button>
      <div>
        {gifs.map((gif, key) => {
          return (
            <GifItem key={key} url={gif.images.fixed_height.url}></GifItem>
          );
        })}
      </div>
    </div>
  );
};
