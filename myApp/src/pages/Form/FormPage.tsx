import React from 'react';
import Header from '../../components/Header/header';
import FormContainer from '../../components/Form/FormContainer/formContainer';
import { Book } from '../../data/mockedData';
import CardList from '../../components/CardList/cardList';

interface IState {
  books: Array<Book>;
}

class FormPage extends React.Component<Record<number, unknown>, IState> {
  constructor(props: Record<number, unknown>) {
    super(props);
    this.state = { books: [] };
    this.addBook = this.addBook.bind(this);
  }

  addBook(book: Book) {
    this.setState((prev) => ({ books: [...prev.books, book] }));
  }

  render() {
    const { books } = this.state;
    return (
      <>
        <Header title="Form" />
        <FormContainer addBook={this.addBook} />
        <CardList books={books} searchTerm="" />
      </>
    );
  }
}

export default FormPage;
