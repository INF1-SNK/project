import React from 'react';
import Description from '../Description/Description';
import Tag from '../Tag/Tag';
import Title from '../Title/Title';
import './card.css';


const Card = ({ 
    format = "large",
    color = "white",
    title = "Name of the bar",
    tag = "Contrie",
    description = "description of the bar or his adress"
}) => {

    return (
        <>
            <div className={['storybook-card', `storybook-card--${format}`, `storybook-card--${color}`].join(' ')}> 
                <Title text={title} /> 
                <Tag className='tagCssOnCard' text={tag} /> 
                <Description text={description} /> 
            </div>
        
        </>
    )
}
export default Card;