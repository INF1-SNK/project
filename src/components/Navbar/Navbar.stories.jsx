import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Link from '../Link/Link';
import Navbar from './Navbar';


export default {
    component: Navbar,
    title: 'components/Navbar'
};

const Template = (args) => <Navbar {...args} />

export  const Default = Template.bind({});

Default.args = {
    menu:[<Link content='test1' color='black'></Link>,
    <Link content='test2' color='black'></Link>,
    <Dropdown label='Test3' menu={[{content:'droptest1'}, {content:'droptest2'}]}></Dropdown>
            ]

}
