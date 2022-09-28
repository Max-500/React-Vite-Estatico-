import Info from "../Componentes/Info";

function Mostrar () {
    const info = [
        {
            id:"seccion5",
            title:"Drogas Ilegales",
            content:"En general se emplea el término droga ilegal o ilícita al hablar de aquellas que están bajo un control internacional, que pueden o no tener un uso médico legítimo, pero que son producidas, traficadas y/o consumidas fuera del marco legal."
        }
    ]
    return ( 
        <Info info={info}/>
     );
}

export default Mostrar;