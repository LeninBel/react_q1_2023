import React, { LegacyRef } from 'react';
import '../form.css';

interface IFormRadioProps {
  label: string;
  id: string;
  name: string;
  forwardRef: LegacyRef<HTMLInputElement>;
}

class FormRadio extends React.Component<IFormRadioProps> {
  render() {
    const { id, name, label, forwardRef } = this.props;

    return (
      <div>
        <input type="radio" id={id} name={name} ref={forwardRef} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default FormRadio;
