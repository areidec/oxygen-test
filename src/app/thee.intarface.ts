export interface TreeNode {
  isChecked: boolean;
  label: string;
  ids: any;
  childNodes?: TreeNode[];
  opened: boolean;
}
