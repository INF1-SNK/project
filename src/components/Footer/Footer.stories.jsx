import React from 'react';
import Footer from './Footer';

export default {
    component: Footer,
    title: 'components/Footer'
};

const Template = (args) => <Footer {...args} />

export  const UniqueFooter = Template.bind({});

Footer.args = {}