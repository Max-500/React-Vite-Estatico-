import Cards from "../Componentes/cards"

function mapear(props) {
    <>
        {props.imgs.map((imgs)=>{
            return(
                <Cards imgs={imgs} />
            )
        })}
    </>
}

export default mapear;props