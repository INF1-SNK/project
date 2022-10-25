import React from 'react';
import Tag from './Tag';

export default {
    component: Tag,
    title: 'components/Tag'
};

const Template = (args) => <Tag {...args} />

//On crée nos modèles qu'on verra sur storybook
export  const Default = Template.bind({});

//Ici on met les paramètres qu'on vas pouvoir modifer sur Storybook interface
Default.args = {
    text: 'Ceci est un tag',
    color: 'red',
}

//La on créer nos composant réutilisable (des versions "fini") c'est ce qu'on appelle les stories du composant 
export  const Version2 = Template.bind({});
Version2.args = {
    text: 'Tag 2',
    color: 'blue',
    size:'medium',
}

//La on créer nos composant réutilisable (des versions "fini") c'est ce qu'on appelle les stories du composant 
export  const Version3 = Template.bind({});
Version3.args = {
    text: 'Tag 2',
    color: 'red',
    size:'medium',
}

