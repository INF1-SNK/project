import * as React from "react";
import imglOGO from '../../stories/assets/logo-pubStar.png';



const Image =  ( { 
   alt="My alternative", 
   link="www.google.fr",
   src={imglOGO}, 
   className ="storybook-logo--small"
}) => {

  return (
    <div>
        <a 
        className={className}
        link={link}
        alt={alt}>
          <img src={src}/>
        </a>
    </div>
  )
}

Image.defaultProps = {
  alt: " "
};

export default Image;