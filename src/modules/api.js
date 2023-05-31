import axios from 'axios';

const uri = "https://localhost:7125/api";

const searchImages = async (search) => {
    if(!search) return undefined;

    search = search.trim();
    if(search.length === 0) return undefined;

    try {
      const response = await axios.get(
        `${uri}/PixabayApi/GetPictures?images=${encodeURIComponent(search)}`
      );

      const hits = response.data;
      return hits;
    } catch (error) {
      console.error('Error fetching images:', error);
      return undefined;
    }
};

export default {
    searchImages: searchImages
};
