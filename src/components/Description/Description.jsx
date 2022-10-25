import React from 'react';
import './description.css'

const Description = ({ 
    text = "This is a description of a product or a bar",
    size = "small",
}) => {

    return (
        <>  
        <p className={size}>
            {text}
        </p>
        
        </>
    )
}
export default Description;