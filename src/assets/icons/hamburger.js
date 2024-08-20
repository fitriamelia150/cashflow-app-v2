import React from 'react'

const Hamburger = ({onClick}) => {

    return (
        <div className="icon-menu" onClick={onClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    )
}

export default Hamburger
