import React from 'react';
import './logo.css';
import imglOGO from '../../stories/assets/logo-pubStar.png';



const Logo = ({ 
    format = "large",
}) => {

    return (   
        <div className={['storybook-logo', 'storybook-logo img', `storybook-logo--${format}`].join(' ')}> 
            <img src={imglOGO} alt='lOGO' /> 
        </div>
    )
}
export default Logo;