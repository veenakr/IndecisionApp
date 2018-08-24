import React from 'react';

const Action = props => {
  return (
    <div className="action">
      <div className="action__middle">
        <button className="button__action" disabled={props.hasOptions} onClick={props.handlePick}>
          What should I Do?
        </button>
      </div>
    </div>
  );
};

export default Action;
