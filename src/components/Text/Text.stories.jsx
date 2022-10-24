import React from 'react';
import Text from './Text';

export default {
    component: Text,
    Text: 'components/Text'
};

const Template = (args) => <Text {...args} />

export  const Small = Template.bind({});

Small.args = {
    content : 'Hello',
    size : "small"
}

export  const Medium = Template.bind({});

Medium.args = {
    content : 'Hello',
    size : "medium"
}

export  const Large = Template.bind({});

Large.args = {
    content : 'Hello',
    size : "large"
}