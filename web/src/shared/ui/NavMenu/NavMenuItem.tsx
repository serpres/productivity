import { clsx } from 'clsx';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useToggle } from '@/shared/hooks';
import { MenuItem } from '@/shared/ui/NavMenu/types';

import style from './style.module.scss';

type NavMenuItemProps = MenuItem & {
  onSelectMenuItem: (id: string, path: string) => void;
  activeId?: string;
  isChild?: boolean;
  isParentOpen?: boolean;
  path: string;
};

export const NavMenuItem: FC<NavMenuItemProps> = ({
  id,
  title,
  activeId,
  onSelectMenuItem,
  childItems,
  isChild,
  isParentOpen,
  path,
}) => {
  const [isOpen, toggleOpen] = useToggle(true);
  const { t } = useTranslation();
  return (
    <>
      <div
        className={clsx(style.menuItem, {
          [style.active]: activeId === id,
          [style.child]: isChild,
          [style.notVisible]: isChild && !isParentOpen,
        })}
        onClick={() => {
          onSelectMenuItem(id, path);
        }}
      >
        {t(title) ?? title}

        {Boolean(childItems?.length) && (
          <div
            className={style.icon}
            onClick={e => {
              if (childItems) {
                e.stopPropagation();
                toggleOpen();
              }
            }}
          >
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        )}
      </div>

      {childItems?.map(childItem => (
        <NavMenuItem
          isParentOpen={isOpen}
          onSelectMenuItem={onSelectMenuItem}
          activeId={activeId}
          key={childItem.id}
          isChild
          {...childItem}
        />
      ))}
    </>
  );
};
