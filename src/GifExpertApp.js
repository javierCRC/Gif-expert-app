// Componentes funciuonales  acortador "rafcp" y presionamos tab
import React, { useState } from 'react'
//import PropTypes from 'prop-types'

import  AddCategory  from './components/AddCategory.js';
import  { GifGrid }    from './components/GifGrid.js';

const GifExpertApp = () => {
    
    
    const [ categorias, setCategorias] = useState(["One Punch Man"]);
    
   
    return (
        
         // fragment
         <>
            <h2>
                GifExpertApp
            </h2>

            <AddCategory setCategorias={ setCategorias }/>
            <hr />

            <ol>
                {
                    categorias.map( (categoria) => (
                        <GifGrid 
                           key= { categoria } 
                           category = { categoria }
                        />
                    ))
                }
            </ol>
        </>
        
    )
}

/*GifExpertApp.propTypes = {

}*/

export default GifExpertApp
