import Layout from "./Layout";
import Informar from "./Informar"
import Card from "../Componentes/cards"
import Final from "./FInal"

function App() {
  return (
    <>
    <Layout></Layout>
    <Informar></Informar>
    <Card title1="Alcohol"
          content1="El alcohol es una droga depresora del Sistema Nervioso Central que inhibe progresivamente las funciones cerebrales. Afecta 
          a la capacidad de autocontrol, produciendo inicialmente euforia y desinhibición, por lo que puede confundirse con un estimulante."  
          
          title2="Nicotina"
          content2="Produce fatiga, tos y expectoración. La nicotina actúa sobre las áreas del cerebro que regulan las sensaciones placenteras, 
          provocando la aparición de dependencia. También actúa sobre el sistema cardiovascular aumentando la frecuencia cardiaca y la posibilidad
          de arritmias."

          title3="Cafeina"
          content3="La cafeína es una sustancia amarga que se encuentra naturalmente en más de 60 plantas, incluyendo: Granos de café Hojas de té
           Nueces de cola, que se usan para el sabor de las bebidas de cola."
          />
    <Final />      
    </>
  );
}

export default App;