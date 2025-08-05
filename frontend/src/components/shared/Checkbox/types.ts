export type Props = {} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
    type?: 'checkbox' | 'radio';
  };
