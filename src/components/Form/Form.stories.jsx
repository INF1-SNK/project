import React from 'react';
import Form from './Form';

export default {
    component: Form,
    Text: 'components/Form'
};

const Template = (args) => <Form {...args} />

export  const Initial = Template.bind({});

Initial.args = {}