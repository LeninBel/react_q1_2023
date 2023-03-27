import React, { ChangeEventHandler, forwardRef, LegacyRef } from 'react';
import '../form.css';

interface IFromCheckboxProps {
  label: string;
  name: string;
  hasError: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

type Ref = HTMLInputElement;

const FormCheckbox = forwardRef<Ref, IFromCheckboxProps>(function checkbox(
  { hasError, name, label, onChange, onBlur },
  ref
) {
  return (
    <label
      htmlFor={name}
      className={`form__checkbox-label ${hasError ? 'form__checkbox-label--error' : ''}`}
    >
      <input id={name} name={name} type="checkbox" ref={ref} onChange={onChange} onBlur={onBlur} />
      {label}
    </label>
  );
});

export default FormCheckbox;
