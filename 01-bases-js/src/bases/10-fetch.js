const apiKey = 'y0yUAlsdaKOS5Zm17DYyCUb4ByNiJ4Th';
// https://api.giphy.com/v1/gifs/random?api_key=y0yUAlsdaKOS5Zm17DYyCUb4ByNiJ4Th

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((response) => response.json())
  .then(({ data }) => {
    let { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  });
