import React from 'react'

const FontAwesomeIcons=({icon="ellipsis-h", text=false, onClick})=> (
    <div onClick={onClick}>
        <span className={`fas fa-${icon}`}/>
        {Boolean(text) &&<span>&nbsp;{text}</span>}
    </div>
)

export default FontAwesomeIcons