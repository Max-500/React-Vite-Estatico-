import Marihuana from "../assets/imagenes/marihuana.jpg";
import Cocaina from "../assets/imagenes/cocaina.jpg";
import Anfetaminas from "../assets/imagenes/anfetaminas.jpg";

import Map from "./Map"

function redirect () {
    const imgs = [
        {
            direction:{Marihuana}
        },
        {
            direction:{Cocaina}
        },
        {
            direction:{Anfetaminas}
        }
    ]
    return ( 
        <Map imgs={imgs}/>
     );
}

export default redirect;