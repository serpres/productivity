import cn from 'clsx';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from 'react';

import style from './style.module.scss';

interface ButtonProps {
  variant?: 'secondary' | 'primary';
}
export const Button: FC<
  PropsWithChildren<
    ButtonProps &
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >
  >
> = ({ children, variant = 'primary', ...props }) => (
  <button className={cn(style.button, style[`button__${variant}`])} {...props}>
    {children}
  </button>
);
