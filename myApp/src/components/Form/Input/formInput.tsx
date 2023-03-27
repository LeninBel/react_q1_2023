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

// class FormInput extends React.Component<IFormInputProps> {
//   render() {
//     const { hasError, id, name, type, label, forwardRef, onChange, onBlur } = this.props;

//     return (
//       <>
//         <label htmlFor={id} className="form__label">
//           {label}
//         </label>
//         <input
//           className={`form__input ${hasError ? 'form__input--error' : ''}`}
//           id={id}
//           name={name}
//           type={type}
//           ref={forwardRef}
//           onChange={onChange}
//           onBlur={onBlur}
//         />
//       </>
//     );
//   }
// }

export default FormInput;
