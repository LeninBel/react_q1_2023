import React, { forwardRef, ChangeEventHandler } from 'react';
import '../form.css';

interface IFormInputProps {
  label: string;
  name: string;
  type: 'text' | 'date';
  hasError: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

type Ref = HTMLInputElement;

const FormInput = forwardRef<Ref, IFormInputProps>(function input(
  { hasError, name, type, label, onChange, onBlur },
  ref
) {
  return (
    <>
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <input
        className={`form__input ${hasError ? 'form__input--error' : ''}`}
        id={name}
        name={name}
        type={type}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
});

export default FormInput;
