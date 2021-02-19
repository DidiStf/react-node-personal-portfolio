import classnames from 'classnames';
import { useContext } from 'react';

import { NavbarMenuContext } from '../../context/NavbarMenuProvider';
import { TranslationLocaleContext } from '../../context/TranslationLocaleProvider';

import NavbarItem from './Item';
import NavbarMenuToggler from './Toggler';
import FlagButtons from '../Buttons/FlagButtons/FlagButtons';

import { translate } from '../../utils/translate';

import './Menu.scss';

const NavbarMenu = () => {
  const { open, toggleMenuAction } = useContext(NavbarMenuContext);
  const { locale } = useContext(TranslationLocaleContext);
  const pathCv = `/cv/CV_${locale.toUpperCase()}.pdf`;

  return (
    <div className={classnames('NavbarMenu', { open })}>
      <ul className='NavbarMenu_list'>
        <NavbarItem path='/' onClick={toggleMenuAction}>
          {translate('menu.home')}
        </NavbarItem>
        <NavbarItem path='/about' onClick={toggleMenuAction}>
          {translate('menu.about')}
        </NavbarItem>
        <NavbarItem path='/skills' onClick={toggleMenuAction}>
          {translate('menu.skills')}
        </NavbarItem>
        <NavbarItem path='/projects' onClick={toggleMenuAction}>
          {translate('menu.projects')}
        </NavbarItem>
        <NavbarItem path='/experience' onClick={toggleMenuAction}>
          {translate('menu.experience')}
        </NavbarItem>
        <NavbarItem path='/contact' onClick={toggleMenuAction}>
          {translate('menu.contact')}
        </NavbarItem>
        <NavbarItem
          className='resume'
          path={pathCv}
          target='_blank'
          rel='noreferrer noopener'
        >
          {translate('menu.resume')}
        </NavbarItem>
      </ul>
      <FlagButtons />
      <NavbarMenuToggler />
    </div>
  );
};

export default NavbarMenu;
