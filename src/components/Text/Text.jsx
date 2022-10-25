import React from 'react';
import './Text.css'

const Text = ({ 
    content = "Aut optandi hostes discursantes optandi quicquid rapacium si non non.",
    size = "small"
}) => {

    return ( 
            <p className={size}>{content}</p>
    )
}
export default Text;