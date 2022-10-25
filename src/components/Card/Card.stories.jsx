import React from 'react';
import Card from './Card';

export default {
    component: Card,
    title: 'components/Card'
};

const Template = (args) => <Card {...args} />

//On crée nos modèles qu'on verra sur storybook
export  const Default = Template.bind({});

Default.args = {
    format: "large",
    color: "white",
    title: "Name of the bar",
    tag: "Pays ",
    description: "description of the bar or his adress"
}

export  const VersionLongue = Template.bind({});
VersionLongue.args = {
    format: "long",
    color: "white",
    title: "Name of the bar",
    tag: "Pays 1",
    description: "description of the bar or his adress"
}

export  const VersionColor = Template.bind({});
VersionColor.args = {
    format: "long",
    color: "red",
    title: "Name of the bar",
    tag: "Pays 2 ",
    description: "description of the bar or his adress"
}

export  const VersionBig = Template.bind({});
VersionBig.args = {
    format: "big",
    color: "red",
    title: "Name of the bar",
    tag: "Pays ",
    description: "description of the bar or his adress"
}

export  const VersionVisitedLong = Template.bind({});
VersionColor.args = {
    format: "vistedLong",
    color: "red",
    title: "Name of the bar",
    tag: "Pays 2 ",
    description: "description of the bar or his adress"
}

export  const VersionVisitedLarge = Template.bind({});
VersionColor.args = {
    format: "vistedLarge",
    color: "red",
    title: "Name of the bar",
    tag: "Pays 2 ",
    description: "description of the bar or his adress"
}