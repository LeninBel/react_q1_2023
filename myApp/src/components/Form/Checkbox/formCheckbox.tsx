import React, { LegacyRef } from 'react';
import '../form.css';

interface IFromCheckboxProps {
  label: string;
  id: string;
  name: string;
  hasError: boolean;
  forwardRef: LegacyRef<HTMLInputElement>;
}

class FormCheckbox extends React.Component<IFromCheckboxProps> {
  render() {
    const { hasError, id, name, label, forwardRef } = this.props;

    return (
      <label
        htmlFor={id}
        className={`form__checkbox-label ${hasError ? 'form__checkbox-label--error' : ''}`}
      >
        <input id={id} name={name} type="checkbox" ref={forwardRef} />
        {label}
      </label>
    );
  }
}

export default FormCheckbox;
