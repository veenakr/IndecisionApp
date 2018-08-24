import React from 'react';

class Options extends React.Component {
  handleRemove = optionToRemove => {
    this.props.handleRemove(optionToRemove);
  };
  render() {
    return (
      <div className="add_option">
        {!this.props.options.length > 0 ? (
          <p className="option_two">Please add an option to get started</p>
        ) : (
          <div>
            {this.props.options.map((option, index) => {
              return (
                <div className="new_option" key={index}>
                  <p className="Option_list">
                    {index + 1}.{option}
                  </p>
                  <button className="remove" onClick={() => this.handleRemove(option)}>
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Options;
