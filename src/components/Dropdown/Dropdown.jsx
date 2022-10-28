import React from 'react';
import Link from '../Link/Link';
import { Button } from '../Button/Button';

import './dropdown.css'

const Dropdown = ({ 
    label = "Dropdown",
    menu 
}) => {
    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    var cpt=0;
    return (
        <div className="dropdown">
            <Button label={label} onClick={handleOpen}></Button>
        {open ? (
            <ul className="menu">
                {menu.map(menuItem => 
                    <li key={cpt++}>
                        <Link content={menuItem.content} url={menuItem.url}></Link>
                    </li>
                )}
            </ul>
        ) : null}
        </div>
    );

};
export default Dropdown;