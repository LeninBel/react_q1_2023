import React from 'react';
import Error from '../Error/error';
import { isDateInPast, isEmpty } from './validationRules';
import './form.css';
import FormInput from './Input/formInput';
import FormSelect from './Select/formSelect';
import Categories from '../../data/categoryData';
import UploadFile from './UploadFile/uploadFile';
import FormCheckbox from './Checkbox/formCheckbox';

interface IState {
  errors: Record<string, boolean>;
  formData: Record<string | number | symbol, unknown>;
}

class Form extends React.Component<Record<string | number | symbol, unknown>, IState> {
  titleRef: React.RefObject<HTMLInputElement>;

  authorRef: React.RefObject<HTMLInputElement>;

  releaseDateRef: React.RefObject<HTMLInputElement>;

  categoryRef: React.RefObject<HTMLSelectElement>;

  agreeCheckboxRef: React.RefObject<HTMLInputElement>;

  uploadFileRef: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string | number | symbol, unknown>) {
    super(props);

    this.state = { errors: {}, formData: {} };

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.titleRef = React.createRef();
    this.authorRef = React.createRef();
    this.releaseDateRef = React.createRef();
    this.categoryRef = React.createRef();
    this.agreeCheckboxRef = React.createRef();
    this.uploadFileRef = React.createRef();
  }

  onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.validate();
    const formData = new FormData(event.currentTarget);
    console.log(formData.forEach((v, k) => console.log(v, k)));
  }

  validate() {
    const currentErrors: Record<string, boolean> = {};
    currentErrors.title = isEmpty(this.titleRef.current?.value);
    currentErrors.author = isEmpty(this.authorRef.current?.value);

    const releaseDateValue = this.releaseDateRef.current?.value;
    currentErrors.releaseDate = isEmpty(releaseDateValue) || !isDateInPast(releaseDateValue);
    currentErrors.category = isEmpty(this.categoryRef.current?.value);
    currentErrors.uploadFile = isEmpty(this.uploadFileRef.current?.value);
    currentErrors.agree = !this.agreeCheckboxRef.current?.checked;
    this.setState((prev) => ({ ...prev, errors: currentErrors }));
  }

  render() {
    const {
      errors: { title, author, releaseDate, category, agree, uploadFile },
    } = this.state;

    return (
      <div className="form">
        <form onSubmit={this.onSubmitForm}>
          <div className="form__control">
            <FormInput
              hasError={title}
              label="Title"
              id="title"
              name="title"
              type="text"
              forwardRef={this.titleRef}
            />
            <Error error="Title is invalid" show={title} />
          </div>
          <div className="form__control">
            <FormInput
              hasError={author}
              label="Author"
              id="author"
              name="author"
              type="text"
              forwardRef={this.authorRef}
            />
            <Error error="Author is invalid" show={author} />
          </div>
          <div className="form__control">
            <FormInput
              hasError={releaseDate}
              label="Release date"
              id="releaseDate"
              name="releaseDate"
              type="date"
              forwardRef={this.releaseDateRef}
            />
            <Error error="Release date is invalid" show={releaseDate} />
          </div>
          <div className="form__control">
            <FormSelect
              hasError={category}
              label="Category"
              id="category"
              name="category"
              forwardRef={this.categoryRef}
              options={Categories}
            />
            <Error error="Category date is invalid" show={category} />
          </div>
          <div className="form__control">
            <UploadFile
              hasError={uploadFile}
              id="bookCover"
              name="bookCover"
              label="Upload book cover"
              forwardRef={this.uploadFileRef}
            />
          </div>
          <div className="form__control">
            <FormCheckbox
              label="I consent to my personal data"
              hasError={agree}
              id="personalData"
              name="personalData"
              forwardRef={this.agreeCheckboxRef}
            />
          </div>
          <button className="form__submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
