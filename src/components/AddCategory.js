import React, {useState} from 'react';
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>1){
            setCategories( cats => [inputValue, ...cats]); //set maneja un callback con el valor original 
            setInputValue('');
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value= {inputValue}
                    onChange={handleInputChange}
                />  
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
};
