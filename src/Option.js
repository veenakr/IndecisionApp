import React from 'react';
import Options from './Options';

const Option = props => {
  return (
    <div>
      <div className="button">
        <h3 className="options">Your Options</h3>
        <button className="option" onClick={props.handleRemoveAll}>
          Remove All
        </button>
      </div>
      <Options options={props.options} handleRemove={props.handleRemove} />
    </div>
  );
};
export default Option;
