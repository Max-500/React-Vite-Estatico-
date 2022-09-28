import Informar2 from "./Informar2"
import Card from "../Componentes/cards2"
import Footer from "../Componentes/pie"

function Final() {
    return ( 
        <>
        <Informar2></Informar2>
        <Card title1="Marihuana"
          content1="La marihuana, también conocida como cannabis, hierba, mota o droga, se refiere a las flores, las hojas, los tallos y las 
          semillas secas de la planta de cannabis. La planta de cannabis contiene más de 100 compuestos (o canabinoides)."  
          
          title2="Cocaina"
          content2="La cocaína o benzoilmetilecgonina según la denominación común internacional, también conocida simplemente como coca, es un 
          alcaloide tropano y fuerte estimulante utilizado sobre todo como droga recreativa."

          title3="Anfetaminas"
          content3="Las anfetaminas son drogas estimulantes. Provocan que la comunicación entre el cerebro y el cuerpo se acelere. Como resultado,
           usted está más alerta y físicamente activo. Algunas personas utilizan anfetaminas para mantenerse despiertas en el trabajo o para 
           estudiar para un examen."/>
        <Footer />
        </>
     );
}

export default Final;