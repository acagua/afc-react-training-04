
import React, {useState} from 'react'; // rafc -> TAB
//import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['alimentos', 'ropa', 'tecnología'];
    const [categories, setCategories] = useState(['poop']);

    /*const handleAdd = () => {
        setCategories([...categories,'tecnología']); //si queremos agregarla al principio podemos poner tecnoliga antes de ...categories
        //setCategories( cats => [...cats,'Tecnología']); //set maneja un callback con el valor original 

    };*/
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>  
            <hr/>
            {/* <button onClick = { handleAdd }>
                Agregar
            </button> */}

            <ol>
                { 
                    categories.map( (category, i)  => (//i = index en el array, //map transforma cada elemento del arreglo
                            <GifGrid 
                                key={category}
                                category={category}
                            />
                    ))
                }
            </ol>
        </>    
    )
}

//export default GifExpertApp;