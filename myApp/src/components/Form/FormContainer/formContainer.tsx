import React from 'react';
import Form from '../form';
import { isDateInPast, isEmpty } from '../validationRules';
import { Book } from '../../../data/mockedData';

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

interface IState {
  errors: IFormErrorData;
}

interface IProps {
  addBook: (book: Book) => void;
}

class FormContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      errors: {
        title: false,
        author: false,
        releaseDate: false,
        category: false,
        uploadFile: false,
        agree: false,
        forSale: false,
      },
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(formData: IFormData, onSuccess: () => void) {
    const hasError = this.validate(formData);

    if (!hasError) {
      onSuccess();
      const book: Book = {
        title: formData.title,
        author: formData.author,
        category: formData.category,
        image: formData.uploadFile != null ? URL.createObjectURL(formData.uploadFile) : '',
        releaseDate: formData.releaseDate,
        onSale: formData.forSale,
      };

      const { addBook } = this.props;
      addBook(book);
    }
  }

  validate(formData: IFormData) {
    const currentErrors: IFormErrorData = {
      title: false,
      author: false,
      releaseDate: false,
      category: false,
      uploadFile: false,
      agree: false,
      forSale: false,
    };
    currentErrors.title = isEmpty(formData.title);
    currentErrors.author = isEmpty(formData.author);
    currentErrors.releaseDate =
      isEmpty(formData.releaseDate) || !isDateInPast(formData.releaseDate);
    currentErrors.category = isEmpty(formData.category);
    currentErrors.uploadFile = formData.uploadFile == null;
    currentErrors.agree = !formData.agree;
    currentErrors.forSale = formData.forSale === formData.notForSale;
    this.setState(() => ({
      errors: currentErrors,
    }));

    return Object.values(currentErrors).find((e: boolean) => e) !== undefined;
  }

  render() {
    const { errors } = this.state;
    return <Form errors={errors} onSubmit={this.onSubmitForm} />;
  }
}

export default FormContainer;
