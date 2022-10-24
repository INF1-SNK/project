import React from 'react';
import './title.css'

const Title = ({ 
    text = "Hello world",
    size = "small",
    souligne = false
}) => {

    return (
            <h2
                className={size}
                style={!souligne ? {textDecoration : "none" } : {textDecoration : "underline"}}
                >
                {text}
            </h2>
    )
}
export default Title;
