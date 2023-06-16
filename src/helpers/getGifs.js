const apiKey = "k2Ql7j8GTLVl31NT2dw51rbj8J1x7ZuO";
const urlGifs = "https://api.giphy.com/v1/gifs/";
export const getGifs = async ( category ) => {
  const url = `${urlGifs }search?api_key=${apiKey}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
