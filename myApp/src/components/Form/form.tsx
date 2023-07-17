/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import Error from '../Error/error';
import './form.css';
import FormInput from './Input/formInput';
import FormSelect from './Select/formSelect';
import Categories from '../../data/categoryData';
import UploadFile from './UploadFile/uploadFile';
import FormCheckbox from './Checkbox/formCheckbox';
import FormRadio from './Radio/formRadio';
import { isStartWithUpperCase, isDateInPast } from './validationRules';

interface IProps {
  onSubmitForm: (formData: FormData) => void;
}

type FormData = {
  title: string;
  author: string;
  releaseDate: string;
  category: string;
  forSale: string;
  uploadFile: FileList | null | undefined;
  agree: boolean;
};

function Form({ onSubmitForm }: IProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    onSubmitForm(data);

    reset({
      title: '',
      author: '',
      releaseDate: '',
      category: '',
      forSale: '',
      uploadFile: null,
      agree: false,
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__control">
          <FormInput
            hasError={!!errors.title?.message}
            label="Title"
            type="text"
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title?.message && <Error error={errors.title.message} />}
        </div>
        <div className="form__control">
          <FormInput
            hasError={!!errors.author?.message}
            label="Author"
            type="text"
            {...register('author', {
              required: 'Author is required',
              validate: (value) =>
                isStartWithUpperCase(value) || 'Author name should start with capital letter',
            })}
          />
          {errors.author?.message && <Error error={errors.author.message} />}
        </div>
        <div className="form__control">
          <FormInput
            hasError={!!errors.releaseDate?.message}
            label="Release date"
            type="date"
            {...register('releaseDate', {
              required: 'Release date is required',
              validate: (value) =>
                isDateInPast(Date.now(), value) || 'Release date should not be in the future data',
            })}
          />
          {errors.releaseDate?.message && <Error error={errors.releaseDate.message} />}
        </div>
        <div className="form__control">
          <FormSelect
            hasError={!!errors.category?.message}
            label="Category"
            options={Categories}
            {...register('category', {
              required: 'Category is required',
            })}
          />
          {errors.category?.message && <Error error={errors.category.message} />}
        </div>
        <div className="form__control">
          <fieldset className={`radio_group ${errors.forSale ? 'radio_group--error' : ''}`}>
            <legend className="form__label">Is this book for clearance sale?</legend>
            <FormRadio
              label="Yes"
              id="forSale"
              value="yes"
              {...register('forSale', {
                required: true,
              })}
            />
            <FormRadio
              id="notForSale"
              label="No"
              value="no"
              {...register('forSale', {
                required: true,
              })}
            />
          </fieldset>
          {errors.forSale && <Error error="Please select an option" />}
        </div>
        <div className="form__control">
          <UploadFile
            hasError={!!errors.uploadFile}
            label="Upload book cover"
            {...register('uploadFile', {
              validate: (value) => value?.length === 1 ?? 'File is not found',
            })}
          />
          {errors.uploadFile && <Error error="File is not found" />}
        </div>
        <div className="form__control">
          <FormCheckbox
            label="I consent to my personal data"
            hasError={!!errors.agree}
            {...register('agree', {
              required: 'Confirmation is required',
            })}
          />
          {!!errors.agree?.message && <Error error={errors.agree.message} />}
        </div>
        <button className="form__submit" type="submit" data-testid="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
