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

const searchImagesByUser = async (username) => {
  if(!username) return undefined;

  username = username.trim();
  if(username.length === 0) return undefined;

  try {
    const response = await axios.get(
      `${uri}/PixabayApi/GetPicturesByUser/${encodeURIComponent(username)}`
    );

    const hits = response.data;
    return hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return undefined;
  }
};

const searchVideos = async (search) => {
  if(!search) return undefined;

  search = search.trim();
  if(search.length === 0) return undefined;

  try {
    const response = await axios.get(
      `${uri}/PixabayApi/GetVideos?videos=${encodeURIComponent(search)}`
    );

    const hits = response.data;
    return hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return undefined;
  }
};

const searchVideosByUser = async (username) => {
if(!username) return undefined;

username = username.trim();
if(username.length === 0) return undefined;

try {
  const response = await axios.get(
    `${uri}/PixabayApi/GetVideosByUser/${encodeURIComponent(username)}`
  );

  const hits = response.data;
  return hits;
} catch (error) {
  console.error('Error fetching images:', error);
  return undefined;
}
};

const functions = {
  searchImages: searchImages,
  searchVideos: searchVideos,
  searchImagesByUser: searchImagesByUser,
  searchVideosByUser: searchVideosByUser
}

export default functions;
