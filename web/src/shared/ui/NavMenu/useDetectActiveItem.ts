import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MenuItem } from '@/shared/ui/NavMenu/types';

export const useDetectActiveItem = (menuItems: MenuItem[]) => {
  const [activeId, setActiveId] = useState<string>();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (activeId) return;
    function findItemByPath(items: MenuItem[]): MenuItem | null {
      for (const item of items) {
        if (`/${item.path}` === pathname) {
          return item;
        }
        if (item.childItems?.length) {
          const foundInChildren = findItemByPath(item.childItems);
          if (foundInChildren) {
            return foundInChildren;
          }
        }
      }
      return null;
    }
    const currentItem = findItemByPath(menuItems);
    if (currentItem) setActiveId(currentItem.id);
  }, [activeId, menuItems, pathname]);

  const onSelectMenuItem = useCallback(
    (id: string, path: string) => {
      setActiveId(id);
      if (path) navigate(`/${path}`, { replace: true });
    },
    [setActiveId, navigate],
  );

  return { onSelectMenuItem, activeId };
};
