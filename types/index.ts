export type MenuItem = {
  label: string;
  path: string;
};

export type FooterButton = {
  class: string;
  disabled: boolean;
  action: () => void;
  label: string;
  path: string;
  id?: string;
};