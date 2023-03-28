import React, { ChangeEventHandler, forwardRef } from 'react';
import '../form.css';

interface IUploadFileProps {
  label: string;
  name: string;
  hasError: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

type Ref = HTMLInputElement;

const UploadFile = forwardRef<Ref, IUploadFileProps>(function upload(
  { hasError, name, label, onChange, onBlur },
  ref
) {
  return (
    <>
      <label htmlFor={name} className={`form__upload ${hasError ? 'form__upload--error' : ''}`}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="file"
        ref={ref}
        accept="image/png, image/jpeg"
        onChange={onChange}
        onBlur={onBlur}
        data-testid="uploadFile"
      />
    </>
  );
});

export default UploadFile;
