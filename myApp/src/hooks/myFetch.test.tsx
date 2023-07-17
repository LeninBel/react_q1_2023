import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, Mock, vi } from 'vitest';
import { useFetchCharacter } from './myFetch';
import FetchError from '../components/FetchError/fetchError';
import Loading from '../components/Loading/loading';

function Component(): JSX.Element {
  const { loading, character, error } = useFetchCharacter(25);
  return (
    <>
      {loading ? <Loading /> : <div>{character?.name} </div>}
      {error && <FetchError />}
    </>
  );
}

describe('homePageHelper', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should should render Loading', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: 1,
            image: 'image',
            name: 'test',
            status: 'status',
            species: 'species',
            gender: 'gender',
          }),
      })
    ) as Mock;
    render(<Component />);

    await waitFor(() => screen.getByText('Loading...'));
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
