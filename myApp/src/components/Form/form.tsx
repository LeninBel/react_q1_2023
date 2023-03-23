import React from 'react';
import Error from '../Error/error';
import './form.css';
import FormInput from './Input/formInput';
import FormSelect from './Select/formSelect';
import Categories from '../../data/categoryData';
import UploadFile from './UploadFile/uploadFile';
import FormCheckbox from './Checkbox/formCheckbox';
import FormRadio from './Radio/formRadio';

interface IFormData {
  title: string;
  author: string;
  releaseDate: string;
  category: string;
  uploadFile: File | null | undefined;
  agree: boolean;
  forSale: boolean;
  notForSale: boolean;
}

interface IFormErrorData {
  title: boolean;
  author: boolean;
  releaseDate: boolean;
  category: boolean;
  uploadFile: boolean;
  agree: boolean;
  forSale: boolean;
}

interface IProps {
  errors: IFormErrorData;
  onSubmit: (formData: IFormData, onSuccess: () => void) => void;
}

class Form extends React.Component<IProps> {
  titleRef: React.RefObject<HTMLInputElement>;

  authorRef: React.RefObject<HTMLInputElement>;

  releaseDateRef: React.RefObject<HTMLInputElement>;

  categoryRef: React.RefObject<HTMLSelectElement>;

  agreeCheckboxRef: React.RefObject<HTMLInputElement>;

  uploadFileRef: React.RefObject<HTMLInputElement>;

  forSaleRadioRef: React.RefObject<HTMLInputElement>;

  notForSaleRadioRef: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.titleRef = React.createRef();
    this.authorRef = React.createRef();
    this.releaseDateRef = React.createRef();
    this.categoryRef = React.createRef();
    this.agreeCheckboxRef = React.createRef();
    this.uploadFileRef = React.createRef();
    this.forSaleRadioRef = React.createRef();
    this.notForSaleRadioRef = React.createRef();
  }

  onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = this.getFormData();
    const onSuccess = () => {
      event.currentTarget.reset();
    };
    const { onSubmit } = this.props;
    onSubmit(formData, onSuccess);
  }

  getFormData() {
    const data: Record<string, string | undefined | boolean | File> = {};
    data.title = this.titleRef.current?.value ?? '';
    data.author = this.authorRef.current?.value ?? '';

    data.releaseDate = this.releaseDateRef.current?.value ?? '';
    data.category = this.categoryRef.current?.value ?? '';
    data.uploadFile =
      this.uploadFileRef.current?.files?.length === 1
        ? this.uploadFileRef.current?.files[0]
        : undefined;
    data.agree = this.agreeCheckboxRef.current?.checked ?? false;
    data.forSale = this.forSaleRadioRef.current?.checked ?? false;
    data.notForSale = this.notForSaleRadioRef.current?.checked ?? false;
    return data as unknown as IFormData;
  }

  render() {
    const {
      errors: { title, author, releaseDate, category, agree, uploadFile, forSale },
    } = this.props;

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
            <Error error="Category is invalid" show={category} />
          </div>
          <div className="form__control">
            <fieldset className={`radio_group ${forSale ? 'radio_group--error' : ''}`}>
              <legend className="form__label">Is this book for clearance sale?</legend>
              <FormRadio
                id="forSale"
                label="Yes"
                name="forSale"
                forwardRef={this.forSaleRadioRef}
              />
              <FormRadio
                id="forSale"
                label="No"
                name="forSale"
                forwardRef={this.notForSaleRadioRef}
              />
            </fieldset>
            <Error error="Please select an option" show={forSale} />
          </div>

          <div className="form__control">
            <UploadFile
              hasError={uploadFile}
              id="bookCover"
              name="bookCover"
              label="Upload book cover"
              forwardRef={this.uploadFileRef}
            />
            <Error error="File is not found" show={uploadFile} />
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
          <button className="form__submit" type="submit" data-testid="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
