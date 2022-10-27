import React from 'react';
import Text from '../Text/Text';
import Image from '../Image/Image';
import Link from '../Link/Link';

import './Footer.css';


const Footer = () => {
    return (
            <div className='footer--global'> 
            <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='storybook-logo--medium'></Image>
                <Link content='GitHub' url='https://github.com/INF1-SNK/project'></Link>
                <ul><Text content='Nicolas Raharinosy | Sofiane Djemaa | Karim Sebbah' size='medium'></Text></ul>
                <Text content='NSK 2022 ©' size='small'></Text>
            </div>
    )
}
export default Footer;