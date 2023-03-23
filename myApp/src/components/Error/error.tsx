import React from 'react';

import './error.css';

interface IProps {
  error: string;
}

class Error extends React.Component<IProps> {
  render() {
    const { error } = this.props;
    return (
      <div className="error" data-testid="error">
        <p className="error_content">{error}</p>
      </div>
    );
  }
}

export default Error;
