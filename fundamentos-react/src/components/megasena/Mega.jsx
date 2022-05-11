import React, {useState} from 'react'
import MegaFilho from './MegaFilho.jsx'

const MegaComp = (props) => {
    const [megasena, setMegasena] = useState(0)

    function fornecerInf(megasena){
        setMegasena(megasena)
    }

    return(
        <div>
            <span>{megasena}</span>
            <MegaFilho qndClicar={fornecerInf} min={1} max={60} />
        </div>
    )
}

export default MegaComp;