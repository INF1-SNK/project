import React from 'react';
import './image.css';
import imglOGO from '../../stories/assets/logo-pubStar.png';




const Image =  ( { 
   alt="My alternative", 
   link="www.google.fr",
   src="../stories/assets/logo-pubStar.png", 
   className ="storybook-logo--small"
}) => {

    return (   
        <div className={['storybook-logo', 'storybook-logo img', `storybook-logo--${format}`].join(' ')}> 
            <img src={imglOGO} alt='lOGO' /> 
        </div>
    )
}

export default Image;