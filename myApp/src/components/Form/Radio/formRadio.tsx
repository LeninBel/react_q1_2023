import React, { ChangeEventHandler, forwardRef } from 'react';
import './formRadio.css';

interface IFormRadioProps {
  label: string;
  name: string;
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

type Ref = HTMLInputElement;

const FormRadio = forwardRef<Ref, IFormRadioProps>(function radio(
  { id, name, label, onChange, onBlur },
  ref
) {
  return (
    <div>
      <input type="radio" id={id} name={name} onChange={onChange} onBlur={onBlur} ref={ref} />
      <label className="radio__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
});

export default FormRadio;
