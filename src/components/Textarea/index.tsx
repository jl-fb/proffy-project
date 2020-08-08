import React from 'react';
import { TextareaProps } from '../../models/model';

import './styles.css';
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>
        {label}
        <textarea name={name} id={name} {...rest} />
      </label>
    </div>
  );
};
export default Textarea;
