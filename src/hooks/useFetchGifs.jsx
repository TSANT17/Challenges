import { useEffect, useState } from "react";

import axios from 'axios';
export const useFetchGifs = ({ category }) => {

  const apiKey = 'O00QaM4LSg3DVrx2MLEW3uNgYCJDVV4k';
  const searchTerm = 'gatos'; // Puedes cambiar esto por lo que desees buscar

  const usefetchGifs = async () => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          q: searchTerm,
          api_key: apiKey,
          limit: 10, // Número de GIFs a obtener
        },
      });
      console.log(response.data.data); // Muestra los datos en la consola para verificar
    } catch (error) {
      console.error(error);
    }
  };
}
//   const [images, setImages] = useState([]);

//   const getImages = async () => {
//     const images = await getGifs(category);
//     setImages(images);
//   };
//   useEffect(() => {
//     getImages();
//   }, []);
//   return (
//     images: images,
//     isLoading: isLoading)
// };