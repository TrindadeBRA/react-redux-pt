export default function(props) {
    console.log(props)
    return(
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.subtitulo}</p>
        </div>
    )
}