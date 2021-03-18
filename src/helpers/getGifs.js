
// Esta funcion retorna una promesa con todos los gif
export const getGifs = async ( pCategory ) => {
      
    //Creamos una constante asincrona para obtener la url de las imagenes
    const apiURL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(pCategory)}&limit=10&api_key=GCVaJd2W0gk0vgC151N1bxte15z8DwmJ`;
    const resp = await fetch( apiURL );
    const { data } = await resp.json();
   
    //console.log(data);
    
    
     //Se realiza un map de los datos obtenidos de la respuesta de la API de Gifs
    const arrayGifs = data.map ( objImageMap => {
        return {
            id : objImageMap.id,
            title: objImageMap.title,
            url: objImageMap.images?.downsized_medium.url
        }
    });

    //console.log(arrayGifs);
    return arrayGifs;
}