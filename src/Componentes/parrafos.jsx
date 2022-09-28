import '../assets/styles/parrafos.css'

function parrafos (props) {
    return(
        <div id={props.info.id} className='parrafos'>
            <h2>{props.info.title}</h2>
            <hr />
            <p>{props.info.content}</p>
        </div>
    )
}

export default parrafos;