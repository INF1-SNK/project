import React from 'react';
import './image.css';

const Image =  ( { 
    alt="My alternative", 
    link="www.google.fr",
    src="'../stories/assets/logo-pubStar.png'", 
    className ="storybook-image--small"
 }) => {
 
   return (
     <div>
         <a 
         className={className}link={link}alt={alt}>
        <img src={src}/>
         </a>
     </div>
   )
 }

export default Image;