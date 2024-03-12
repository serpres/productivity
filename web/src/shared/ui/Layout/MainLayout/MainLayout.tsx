import React, { type FC, Suspense } from 'react';

import { NAV_MENU_ITEMS } from '@/shared/consts/navMenuItems';
import { NavMenu } from '@/shared/ui/NavMenu';

import style from './style.module.scss';

export const MainLayout: FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ children, ...rest }) => (
  <Suspense fallback="Loading ...">
    <div className={style.container}>
      <NavMenu menuItems={NAV_MENU_ITEMS} />
      <main className={style.main} {...rest}>
        {children}
      </main>
    </div>
  </Suspense>
);
