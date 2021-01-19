import classnames from 'classnames';
import { useContext } from 'react';

import NavbarMenuContext from '../../context/navbarMenu/navbarMenuContext';

import './Menu.scss';

const NavbarMenu = () => {
    const { open } = useContext(NavbarMenuContext);

    return (
        <div className={classnames("NavbarMenu", { open })}>
            <ul className="NavbarMenu_list">
                <li className="NavbarMenu_list-item">
                    <a className="NavbarMenu_list-item_link test" href="#">Home</a>
                </li>
                <li className="NavbarMenu_list-item">
                    <a className="NavbarMenu_list-item_link" href="#">About</a>
                </li>
                <li className="NavbarMenu_list-item">
                    <a className="NavbarMenu_list-item_link" href="#">Skills</a>
                </li>
                <li className="NavbarMenu_list-item">
                    <a className="NavbarMenu_list-item_link" href="#">Portfolio</a>
                </li>
                <li className="NavbarMenu_list-item">
                    <a className="NavbarMenu_list-item_link" href="#">Contact</a>
                </li>
                <li className="NavbarMenu_list-item">
                    <a className="NavbarMenu_list-item_link" href="#">Resume</a>
                </li>
            </ul>
        </div>
    );
};

export default NavbarMenu;
