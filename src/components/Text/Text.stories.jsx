import React from 'react';
import Text from './Text';

export default {
    component: Text,
    Text: 'components/Text'
};
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis ac dui vitae rutrum. Etiam sed mi nunc. Sed fermentum dui eros, quis tempor ante tempor non. Donec nec erat porttitor, sodales libero vel, posuere sem. Maecenas lorem ante, egestas eu condimentum et, viverra in dui. Etiam convallis, dui eget scelerisque lobortis, dolor tortor varius eros, a dictum dui sapien ut lectus. Quisque ornare nunc sed nunc pretium tincidunt. Sed fringilla libero nec lacinia rhoncus. Proin luctus leo leo.";

const Template = (args) => <Text {...args} />

export  const Small = Template.bind({});

Small.args = {
    content : text,
    size : "small"
}

export  const Medium = Template.bind({});

Medium.args = {
    content : text,
    size : "medium"
}

export  const Large = Template.bind({});

Large.args = {
    content : text,
    size : "large"
}