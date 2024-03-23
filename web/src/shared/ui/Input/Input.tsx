import React, { FC } from 'react';

import style from './style.module.scss';
interface InputProps {
  label: string;
  name: string;
  placeholder: string;
}

export const Input: FC<InputProps> = ({ label, name, placeholder }) => (
  <>
    <label className={style.label} htmlFor={name}>
      {label}
    </label>
    <input placeholder={placeholder} className={style.input} id={name} />
  </>
);
