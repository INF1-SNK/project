import React from 'react';
import './tag.css';

const Tag = ({ 
    text = "Tag test",
    size = "small",
    color = "red",
}) => {

    return (

        <div className={['storybook-tag', `storybook-tag--${size}`, `storybook-tag--${color}`].join(' ')}> 
            <p>
                {text}
            </p>
        </div>
        
    )
}
export default Tag;