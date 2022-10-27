import React from 'react';
import './image.css';
import imglOGO from '../../stories/assets/logo-pubStar.png';
const Image =  ( { 
   format='large'
}) => {

    return (   
        <div className={['storybook-logo', 'storybook-logo img', `storybook-logo--${format}`].join(' ')}> 
            <img src={imglOGO} alt='lOGO' /> 
        </div>
    )
}

export default Image;