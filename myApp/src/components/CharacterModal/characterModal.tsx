import React from 'react';
import FetchError, { IError } from '../FetchError/fetchError';
import Loading from '../Loading/loading';

import './characterModal.css';
import { useGetCharacterByIdQuery } from '../../services/cartoonApi/cartoonApi';

interface IProps {
  id: number;
  onClose: () => void;
}

function CharacterModal({ id, onClose }: IProps): JSX.Element {
  const { data, error, isLoading } = useGetCharacterByIdQuery(id);

  return (
    <div className="modal">
      <div className="modal-content">
        <button type="button" className="close" title="Close Modal" onClick={onClose}>
          ×
        </button>

        {isLoading ? (
          <Loading />
        ) : (
          data && (
            <>
              <div className="modal__header">{data.name}</div>
              <hr />
              <div className="details">
                <img src={data.image} alt="book_cover" className="modal__image" />
                <div className="bio">
                  <p className="bio__status">Status: {data.status}</p>
                  <p className="bio__status">Species: {data.species}</p>
                  <p className="bio__status">Gender: {data.gender}</p>
                </div>
              </div>
            </>
          )
        )}
        {error && <FetchError status={(error as IError)?.status} />}
      </div>
    </div>
  );
}

export default CharacterModal;
