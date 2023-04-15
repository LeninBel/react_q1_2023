import React from 'react';

import './fetchError.css';

export interface IError {
  status: number | undefined;
}

function FetchError({ status }: IError) {
  if (status && status === 404) return null;

  return (
    <div className="fetch_error" data-testid="fetch_error">
      <p>Oops. Something went wrong.</p>
    </div>
  );
}

export default FetchError;
