import React, { ChangeEventHandler, forwardRef } from 'react';
import './formRadio.css';

interface IFormRadioProps {
  label: string;
  name: string;
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  value: string;
}

type Ref = HTMLInputElement;

const FormRadio = forwardRef<Ref, IFormRadioProps>(function radio(
  { id, name, label, onChange, onBlur, value },
  ref
) {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        value={value}
      />
      <label className="radio__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
});

export default FormRadio;
