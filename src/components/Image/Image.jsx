import * as React from "react";




const Image =  ( { 
   alt="My alternative", 
   link="www.google.fr",
   src="../stories/assets/logo-pubStar.png", 
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