import React, { LegacyRef } from 'react';
import '../form.css';

interface IFormInputProps {
  label: string;
  id: string;
  name: string;
  type: 'text' | 'date';
  hasError: boolean;
  forwardRef: LegacyRef<HTMLInputElement>;
}

class FormInput extends React.Component<IFormInputProps> {
  render() {
    const { hasError, id, name, type, label, forwardRef } = this.props;

    return (
      <>
        <label htmlFor={id} className="form__label">
          {label}
        </label>
        <input
          className={`form__input ${hasError ? 'form__input--error' : ''}`}
          id={id}
          name={name}
          type={type}
          ref={forwardRef}
        />
      </>
    );
  }
}

export default FormInput;
