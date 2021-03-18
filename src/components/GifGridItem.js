// Componentes funciuonales  acortador "rafcp" y presionamos tab
import React from 'react'
//import PropTypes from 'prop-types'

 const GifGridItem = ( { title , url } ) => {
   
    //console.log({ id , title , url });

    return (
        <>
        <div className="card animate__animated animate__bounce">
            <img src={ url} alt= { title } />
            <p>  { title } </p>
        </div>
        </>
    )
}

/*GifGridItem.propTypes = {

}*/

export default GifGridItem
