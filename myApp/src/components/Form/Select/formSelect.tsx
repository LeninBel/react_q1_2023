import React, { ChangeEventHandler, forwardRef, LegacyRef } from 'react';
import '../form.css';

interface IOption {
  value: string;
  option: string;
}

interface IFormSelectProps {
  label: string;
  name: string;
  hasError: boolean;
  options: Array<IOption>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  onBlur: React.FocusEventHandler<HTMLSelectElement>;
}

type Ref = HTMLSelectElement;

const FormSelect = forwardRef<Ref, IFormSelectProps>(function select(
  { hasError, name, options, label, onChange, onBlur },
  ref
) {
  return (
    <>
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <select
        className={`form__input ${hasError ? 'form__input--error' : ''}`}
        id={name}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map(({ value, option }) => (
          <option value={value} key={value}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
});

export default FormSelect;
