import React from 'react';
import './title.css'

const Title = ({ 
    text = "Hello world",
    size = "small",
    underlined = false,
    centered = false
}) => {

    return (
            <h2
                className={`title--${size}`}
                style={!underlined ? {textDecoration : "none" } : {textDecoration : "underline"}} 
            >
                {text}
            </h2>
    )
}
export default Title;
