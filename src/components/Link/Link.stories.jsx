import React from 'react';
import Link from './Link';

export default {
    component: Link,
    Text: 'components/Link'
};

const Template = (args) => <Link {...args} />

export const LinkNavbar = Template.bind({});

LinkNavbar.args = {
    content : "Hello",
    url : "https://example.com",
    color : "black"
}

export const LinkOther = Template.bind({});

LinkOther.args = {
    content : "Hello",
    url : "https://miage.pantheonsorbonne.fr/",
    color : "red"
}

export const LinkOtherHover = Template.bind({});

LinkOtherHover.args = {
    content : "Hello",
    url : "https://reactrouter.com/en/main/routers/create-browser-router",
    color : "white"
}