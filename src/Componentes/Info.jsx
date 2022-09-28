import Parrafos from "./parrafos";

function Parrafo(props){
    return(
        <>
        {props.info.map((info)=>{
            return(
                <Parrafos info={info}/>
            )
        })}
        </>
    )
}

export default Parrafo