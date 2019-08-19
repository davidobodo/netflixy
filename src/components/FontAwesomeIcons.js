import React,{Fragment} from 'react'

const FontAwesomeIcons=({icon="ellipsis-h", text=false})=> (
    <Fragment>
        <span className={`fas fa-${icon}`}/>
        {Boolean(text) &&<span>&nbsp;{text}</span>}
    </Fragment>
)

export default FontAwesomeIcons