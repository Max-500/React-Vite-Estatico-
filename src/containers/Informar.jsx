import Info from "../Componentes/Info";

function Mostrar () {
    const info = [
        {
            id:"seccion1",
            title:"¿Qué son las drogas?",
            content:"Las drogas son sustancias químicas que pueden cambiar el funcionamiento de su cuerpo y mente. Incluyen medicamentos recetados, medicamentos de venta libre, alcohol, tabaco y drogas ilegales."
        },{
            id:"seccion2",
            title:"Tipos",
            content:"Son numerosas los tipos que se han realizado de las sustancias psicoactivas, ya que son diversas las perspectivas desde las que se evalúan. Además del ya nombrado diverso estatus legal, los mas conocidos son por su origen, estructura química, acción farmalogica, consideración sociologica, peligrosidad, tambien se pueden clasificar por depresoras, estimulantes, alucinogenas y de las que se trataran en esta pagina, Legales e Ilegales."
        },{
            id:"seccion3",
            title:"Signos de Consumo",
            content:"A veces es difícil distinguir el mal humor o la angustia normales de las personas de los signos del consumo de drogas. Los posibles indicios de que un miembro de la familia, adolescente o no, consume drogas son problemas en la escuela o trabajo, problemas de salud, cambios de conducta, aspecto demacrado y problemas economicos."
        },{
            id:"seccion4",
            title:"Drogas Legales",
            content:"Las drogas lícitas, son sustancias que aunque en muchos casos son psicoactivas, y por tanto con efectos importantes sobre el organismo del individuo, son aceptadas social y culturalmente o bien, prescritas por un/a médico. Las mas comunes a nivel mundial son las siguientes: "
        }
    ]
    return ( 
        <Info info={info}/>
     );
}

export default Mostrar;