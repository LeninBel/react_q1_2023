import React, { LegacyRef } from 'react';
import '../form.css';

interface IOption {
  value: string;
  option: string;
}

interface IFormSelectProps {
  label: string;
  id: string;
  name: string;
  hasError: boolean;
  forwardRef: LegacyRef<HTMLSelectElement>;
  options: Array<IOption>;
}

class FormSelect extends React.Component<IFormSelectProps> {
  render() {
    const { hasError, id, name, label, forwardRef, options } = this.props;

    return (
      <>
        <label htmlFor={id} className="form__label">
          {label}
        </label>
        <select
          className={`form__input ${hasError ? 'form__input--error' : ''}`}
          id={id}
          name={name}
          ref={forwardRef}
        >
          {options.map(({ value, option }) => (
            <option value={value} key={value}>
              {option}
            </option>
          ))}
        </select>
      </>
    );
  }
}

export default FormSelect;
