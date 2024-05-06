import { FC } from 'react';

import { NavMenuItem } from '@/shared/ui/NavMenu/NavMenuItem';
import { MenuItem } from '@/shared/ui/NavMenu/types';
import { useDetectActiveItem } from '@/shared/ui/NavMenu/useDetectActiveItem';

import style from './style.module.scss';

export interface NavMenuProps {
  menuItems: MenuItem[];
}

export const NavMenu: FC<NavMenuProps> = ({ menuItems }) => {
  const { onSelectMenuItem, activeId } = useDetectActiveItem(menuItems);

  return (
    <nav className={style.navMenu}>
      {menuItems.map(item => (
        <NavMenuItem
          key={item.id}
          activeId={activeId}
          onSelectMenuItem={onSelectMenuItem}
          {...item}
        />
      ))}
    </nav>
  );
};
