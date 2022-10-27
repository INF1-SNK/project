import React from 'react';
import Image from './Image';

export default {
    component: Image,
    title: 'components/Image'
};

const Template = (args) => <Image {...args} />

//On crée nos modèles qu'on verra sur storybook
export  const Default = Template.bind({});

Default.args = {
    className: "storybook-logo--small",
    src: "../../stories/assets/logo-pubStar.png",
}