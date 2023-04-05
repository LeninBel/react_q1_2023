/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from '../Form/Input/formInput';
import Error from '../Error/error';

import './searchBar.css';

interface IProps {
  onSubmit: (value: string) => void;
  value: string;
}

type FormData = {
  search: string;
};

function SearchBar({ onSubmit, value }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onEnter = (data: FormData) => {
    onSubmit(data.search.trim());
  };

  return (
    <form onSubmit={handleSubmit(onEnter)} className="searchBar">
      <FormInput
        hasError={!!errors.search?.message}
        label="Search"
        type="text"
        {...register('search', {
          value,
        })}
      />
      {errors.search?.message && <Error error={errors.search.message} />}
    </form>
  );
}

export default SearchBar;
