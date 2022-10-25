import React from 'react';
import Description from './Description';

export default {
    component: Description,
    title: 'components/Description'
};

const Template = (args) => <Description {...args} />

//On crée nos modèles qu'on verra sur storybook
export  const Default = Template.bind({});

Default.args = {
    text: 'Ceci est une description d"un bar par default',
    size: 'small',
    souligne: false,
}

export const Decoration = Template.bind({});

Decoration.args = {
    text: 'Ceci est un texte decoré',
    size: 'medium',
    souligne: true,

}
