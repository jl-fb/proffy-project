import React from 'react';
import { SelectProps } from '../../models/model';

import './styles.css';
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>
        {label}
        <select value="" name={name} id={name} {...rest}>
          <option value="" disabled hidden>
            Selecione uma opção
          </option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};
export default Select;
