// Componentes funciuonales  acortador "rafcp" y presionamos tab
//import React,{ useState , useEffect} from 'react'
import React from 'react'
import    GifGridItem      from './GifGridItem.js';
import    { useFectGifs }      from '../hooks/useFectGifs.js';


export const GifGrid = ({ category }) => {
    
 

    const { data:images,loading } = useFectGifs( category );
    
        
    return (
        
        // fragment implicito 
        <>
                <h3> { category } </h3>

                
                
                
                { loading && <p className="animate__animated animate__flash" >Cargando....</p> }

                        
                        
                            <div className="card-grid">
                                {
                                    images.map( img => (
                                        <GifGridItem 
                                        key= { img.id } 
                                        {...img }
                                        />
                                    ))
                                }
                            </div>
                        
                       
                        
                

                
        </>
        
    )
}
