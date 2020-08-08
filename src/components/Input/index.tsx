import React from 'react';
import { InputProps } from '../../models/model';

import './styles.css';
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>
        {label}
        <input type="text" name={name} id={name} {...rest} />
      </label>
    </div>
  );
};
export default Input;
