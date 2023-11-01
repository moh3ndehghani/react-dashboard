interface MenuModel {
  path: string;
  title: string;
  icon?: any;
  children?: MenuModel[];
}
export default MenuModel;
