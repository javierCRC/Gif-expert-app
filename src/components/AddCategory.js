// Componentes funciuonales  acortador "rafcp" y presionamos tab
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( { setCategorias } ) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const hadleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    
    const hadleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit done');

        if ( inputValue.trim().length > 2 ) { // para evitar valores vacios
            setCategorias( cate => [ inputValue ,...cate]); // para que la ultima en ingresar sea la primera
            setInputValue('');
        }
        
    }


    return (
        
     
        <form onSubmit= { hadleSubmit }>
             <input 
                      type="text"
                      value= { inputValue }
                      onChange = { hadleInputChange }
             />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}

export default AddCategory
