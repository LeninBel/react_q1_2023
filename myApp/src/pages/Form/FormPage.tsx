import React from 'react';
import Header from '../../components/Header/header';
import Form from '../../components/Form/form';

class FormPage extends React.Component {
  render() {
    return (
      <>
        <Header title="Form" />
        <Form />
      </>
    );
  }
}

export default FormPage;
