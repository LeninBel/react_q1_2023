import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/header';
import FormContainer from '../../components/Form/FormContainer/formContainer';
import { Book } from '../../data/mockedData';
import CardList from '../../components/CardList/cardList';
import Toast from '../../components/Toast/toast';
import { RootState } from '../../store/store';
import { addBooks } from '../../store/booksSlice';

function FormPage() {
  const [newAdded, setNewAdded] = useState(false);
  const books = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();

  const addNewBook = (book: Book) => {
    dispatch(addBooks(book));
    setNewAdded(true);
    setTimeout(() => {
      setNewAdded(false);
    }, 3000);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Toast show={newAdded} />
      <Header title="Form" />
      <FormContainer addBook={addNewBook} />
      <CardList books={books} searchTerm="" />
    </div>
  );
}

export default FormPage;
