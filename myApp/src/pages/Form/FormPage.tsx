import React from 'react';
import Header from '../../components/Header/header';
import FormContainer from '../../components/Form/FormContainer/formContainer';
import { Book } from '../../data/mockedData';
import CardList from '../../components/CardList/cardList';
import Toast from '../../components/Toast/toast';

interface IState {
  books: Array<Book>;
  newAdded: boolean;
}

class FormPage extends React.Component<Record<number, unknown>, IState> {
  constructor(props: Record<number, unknown>) {
    super(props);
    this.state = { books: [], newAdded: false };
    this.addBook = this.addBook.bind(this);
  }

  addBook(book: Book) {
    this.setState((prev) => ({ books: [...prev.books, book], newAdded: true }));
    setTimeout(() => {
      this.setState((prev) => ({ books: prev.books, newAdded: false }));
    }, 3000);
  }

  render() {
    const { books, newAdded } = this.state;
    return (
      <div style={{ position: 'relative' }}>
        <Toast show={newAdded} />
        <Header title="Form" />
        <FormContainer addBook={this.addBook} />
        <CardList books={books} searchTerm="" />
      </div>
    );
  }
}

export default FormPage;
