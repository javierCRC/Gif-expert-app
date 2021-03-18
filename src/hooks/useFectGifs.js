// Esto es un custom hooks
import { useState,useEffect } from 'react';
import    { getGifs }      from '../helpers/getGifs.js';

export const useFectGifs = ( pCategory ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
      //HOOK que me permite renderizar solo la primera vez un cierto componente o funcion.
      useEffect( () =>{
        getGifs( pCategory )
         .then ( imgs => {
         
           setTimeout(() => {

             console.log(imgs);

              setState({
                data: imgs,
                loading: false
              })   
               
           }, 3000);
         
         }); // aca resolvemos la promesa para recuperar las imagenes
   },[ pCategory ]);

    return state;
}

