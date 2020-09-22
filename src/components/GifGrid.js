//import React, { useState, useEffect } from 'react'; //el useEffect permite ejeecución condicional a diferencia del useState
import React from 'react';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    

    //Hook useEffect
    //const [count, setCount] = useState(0);

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //      getGifs( category)
    //         .then(setImages);
    // }, [category]); // si el segundo parámetro se envía vacío se ejecuta una única vez (la primera vez que se renderiza el contenido)

    //Custom Hook
    const {data:images, loading} = useFetchGifs( category );
    //console.log({data, loading})

    //Esto debería estar en un helper para dejar más especifico lo que hace cada componente
    // const getGifs = async() => { 
        
    //     const baseUrl = "https://api.giphy.com/v1/gifs/search";
    //     const apiKey = "YXUWTYnIQkfiMDtJY2a4z8mHqKjvCC4n"
    //     const query = "laugh";
    //     const limit  = "10";
    //     const url = `${baseUrl}?api_key=${apiKey}&q=${encodeURI(category)}&limit=${limit}`;
        
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();

    //     const gifs = data.map( img => {
    //         return {
    //             id : img.id,
    //             title : img.title,
    //             url : img.images.downsized_medium.url
    //         }

    //     } )

    //     console.log('data', gifs);
    //     setImages(gifs);
    // }
    


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>   
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>
                { 
                    images.map( (image, i)  => (
                        <GifGridItem 
                        key = {image.id}
                        {...image} //para enviar propiedades de la imagen de manera independiente 
                        />
                    ))
                }
            </div>
        </>
    )  
}
