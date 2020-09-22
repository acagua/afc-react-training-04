
 export const getGifs = async( category ) => {
        
    const baseUrl = "https://api.giphy.com/v1/gifs/search";
    const apiKey = "YXUWTYnIQkfiMDtJY2a4z8mHqKjvCC4n"
    //const query = "laugh";
    const limit  = "10";
    const url = `${baseUrl}?api_key=${apiKey}&q=${encodeURI(category)}&limit=${limit}`;
    
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        }

    } )

    //console.log('data', gifs);
    //setImages(gifs);
    return gifs;
}