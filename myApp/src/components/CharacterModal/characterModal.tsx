import React from 'react';
import FetchError from '../FetchError/fetchError';
import Loading from '../Loading/loading';
import { useFetchCharacter } from '../../hooks/myFetch';

import './characterModal.css';

interface IProps {
  id: number;
  onClose: () => void;
}

function CharacterModal({ id, onClose }: IProps): JSX.Element {
  const { loading, character, error } = useFetchCharacter(id);

  return (
    <div className="modal">
      <div className="modal-content">
        <button type="button" className="close" title="Close Modal" onClick={onClose}>
          ×
        </button>

        {loading ? (
          <Loading />
        ) : (
          character && (
            <>
              <div className="modal__header">{character.name}</div>
              <hr />
              <div className="details">
                <img src={character.image} alt="book_cover" className="modal__image" />
                <div className="bio">
                  <p className="bio__status">Status: {character.status}</p>
                  <p className="bio__status">Species: {character.species}</p>
                  <p className="bio__status">Gender: {character.gender}</p>
                </div>
              </div>
            </>
          )
        )}
        {error && <FetchError />}
      </div>
    </div>
  );
}

export default CharacterModal;
