import axios from 'axios';

const apiKey = 'y0yUAlsdaKOS5Zm17DYyCUb4ByNiJ4Th';
// https://api.giphy.com/v1/gifs/random?api_key=y0yUAlsdaKOS5Zm17DYyCUb4ByNiJ4Th

const gif = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: apiKey,
  },
});

gif.get('/random').then((res) => {
  const { data } = res.data;
  const { url } = data.images.original;

  const img = document.createElement('img');
  img.src = url;

  document.body.appendChild(img);
});

export default gif;
