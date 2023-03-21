import React from 'react';

import './error.css';

interface IProps {
  show: boolean;
  error: string;
}

class Error extends React.Component<IProps> {
  render() {
    const { show, error } = this.props;
    return (
      <div className={`error ${show ? 'show' : ''}`}>
        <p className="error_content">{error}</p>
      </div>
    );
  }
}

export default Error;
