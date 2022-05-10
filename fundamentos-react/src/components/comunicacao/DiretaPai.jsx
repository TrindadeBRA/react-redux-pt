import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho nome="Lucas" idade={25} nerd={true}/>
            <DiretaFilho nome="Henry" idade={3} nerd={false}/>
        </div>
    )
}