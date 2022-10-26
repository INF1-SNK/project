import React from 'react';
import Title from './Title';

export default {
    component: Title,
    title: 'components/Title'
};

const Template = (args) => <Title {...args} />

export  const Default = Template.bind({});

Default.args = {
    text: 'Title',
    size: 'small',
    underlined: false,
}

export const Decoration = Template.bind({});

Decoration.args = {
    text: 'Title',
    size: 'medium',
    underlined: true,

}

export const LargeDecoration = Template.bind({});

LargeDecoration.args = {
    text: 'Title',
    size: 'large',
    underlined: true,
    centered: true

}