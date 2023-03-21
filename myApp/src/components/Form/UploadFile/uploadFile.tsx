import React, { LegacyRef } from 'react';
import '../form.css';

interface IUploadFileProps {
  label: string;
  id: string;
  name: string;
  hasError: boolean;
  forwardRef: LegacyRef<HTMLInputElement>;
}

class UploadFile extends React.Component<IUploadFileProps> {
  render() {
    const { hasError, id, name, label, forwardRef } = this.props;

    return (
      <>
        <label htmlFor={id} className={`form__upload ${hasError ? 'form__upload--error' : ''}`}>
          {label}
        </label>
        <input id={id} name={name} type="file" ref={forwardRef} accept="image/png, image/jpeg" />
      </>
    );
  }
}

export default UploadFile;
