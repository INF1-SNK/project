import React from 'react';
import './navbar.css'

const Navbar = ({ 
    menu
}) => {
    
    var cpt = 0;

    return (
        <div className='navbar-menu'>
            {menu.map(menuItem => 
                    <div className='navbar-link' key={cpt++}>
                        {menuItem}
                    </div>
                )}
        </div>
    );

};
export default Navbar;