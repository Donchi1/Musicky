import React from 'react'

function Carosel({slide, text, title}) {
    return (
        <div className={slide}>
            <h1>{title}</h1>
            <h3 className="carosel-text">{text}</h3>
        </div>
    )
}

export default Carosel
