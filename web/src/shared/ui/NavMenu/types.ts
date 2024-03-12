export interface MenuItem {
  id: string;
  title: string;
  path: string;
  childItems?: MenuItem[];
}
