import React from 'react';

import './characterModal.css';

interface IProps {
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  onClose: () => void;
}

function CharacterModal({ name, onClose, image, status, species, gender }: IProps): JSX.Element {
  return (
    <div className="modal">
      <div className="modal-content">
        <button type="button" className="close" title="Close Modal" onClick={onClose}>
          ×
        </button>
        <div className="modal__header">{name}</div>
        <hr />
        <div className="details">
          <img src={image} alt="book_cover" className="modal__image" />
          <div className="bio">
            <p className="bio__status">Status: {status}</p>
            <p className="bio__status">Species: {species}</p>
            <p className="bio__status">Gender: {gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterModal;
