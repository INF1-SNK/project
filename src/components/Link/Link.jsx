import React from 'react';
import './Link.css'

const Link = ({ 
    content = "Lien de redirection",
    url = "https://github.com/",
    color = ""
}) => {

    return ( 
            <a href={url} style={{color}}>{content}</a>
    )
}
export default Link;