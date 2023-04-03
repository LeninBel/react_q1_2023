import React from 'react';

import './fetchError.css';

function FetchError() {
  return (
    <div className="fetch_error" data-testid="fetch_error">
      <p>Oops. Something went wrong.</p>
    </div>
  );
}

export default FetchError;
