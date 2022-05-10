import React, {useState} from 'react'
import "./index.css"

export default props => {

    const [valor, setValor] = useState('Esse é um teste!')

    function qndMudar(e) {
        setValor(e.target.value)
    }

    return(
        <div className='input-teste'>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center'
            }}>
                <input value={valor} onChange={qndMudar}/>
                {/* <input value={valor} readOnly/>
                <input value={undefined}/> */}
            </div>
        </div>
    )
}