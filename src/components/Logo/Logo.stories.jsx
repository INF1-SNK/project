import React from 'react';
import Logo from './Logo';

export default {
    component: Logo,
    title: 'components/Logo'
};

const Template = (args) => <Logo {...args} />

//On crée nos modèles qu'on verra sur storybook
export  const Default = Template.bind({});

Default.args = {
    format: "large",
    src: "../../stories/assets/logo-pubStar.png",
}



