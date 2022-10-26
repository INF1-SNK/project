import React from 'react';
import Text from '../Text/Text';
import Link from '../Link/Link';
import './Footer.css';


const Footer = () => {
    return (
            <div className='footer--global'> 
                <Link content='GitHub' url='https://github.com/INF1-SNK/project'></Link>
                <ul><Text content='Nicolas Raharinosy | Sofiane Djemaa | Karim Sebbah' size='medium'></Text></ul>
                <footer className="footer">
                <Text content='NSK 2022 ©' size='small'></Text>
                </footer>
            </div>
    )
}
export default Footer;