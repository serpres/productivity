import React, { FC, forwardRef, InputHTMLAttributes, Ref } from 'react';

import style from './style.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: FC<InputProps> = forwardRef(
  ({ label, ...props }, ref: Ref<HTMLInputElement>) => {
    if (label)
      return (
        <label className={style.label}>
          {label}
          <input ref={ref} className={style.input} {...props} />
        </label>
      );
    return <input ref={ref} className={style.input} {...props} />;
  },
);

Input.displayName = 'Input';
