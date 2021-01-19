import classnames from 'classnames';
import { useContext } from 'react';

import NavbarMenuContext from '../../context/navbarMenu/navbarMenuContext';

import './Toggler.scss';

const NavbarMenuToggler = () => {
    const { open, toggleMenuAction } = useContext(NavbarMenuContext);

    return (
        <div
            className={classnames("NavbarMenuToggler", { open })}
            onClick={toggleMenuAction}
        >
            <div className="NavbarMenuToggler_bar half start" />
            <div className="NavbarMenuToggler_bar" />
            <div className="NavbarMenuToggler_bar half end" />
        </div>
    );
};

export default NavbarMenuToggler;
