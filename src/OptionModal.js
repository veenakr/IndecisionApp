import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal
    className="modal"
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
  >
    <h3 className="modal_head">Selected Option</h3>
    <div className="modal_body">
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button className="button__add" onClick={props.handleClearSelectedOption}>
        Okay
      </button>
    </div>
  </Modal>
);

export default OptionModal;
