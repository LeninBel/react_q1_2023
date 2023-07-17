import React from 'react';

import './toast.css';

interface IProps {
  show: boolean;
}

class Toast extends React.Component<IProps> {
  render() {
    const { show } = this.props;
    return (
      <div className={`toast ${show ? 'show_toast' : ''}`} data-testid="toast">
        <p>Book added</p>
      </div>
    );
  }
}

export default Toast;
