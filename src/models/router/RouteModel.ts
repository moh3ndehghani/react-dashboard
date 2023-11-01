export default interface RouterModel {
  path?: string;
  name?: string;
  icon?: string;
  hidden?: boolean;
  element: any;
  children?: RouterModel[];
}
