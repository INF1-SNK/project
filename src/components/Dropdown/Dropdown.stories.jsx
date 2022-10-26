import React from 'react';
import Dropdown from './Dropdown';


export default {
    component: Dropdown,
    title: 'components/Dropdown'
};

const Template = (args) => <Dropdown {...args} />

export  const Default = Template.bind({});

Default.args = {
    trigger : <button>Dropdown</button>,
    menu:[
        {content:'test1'},
        {content:'test2'}
      ]

}
