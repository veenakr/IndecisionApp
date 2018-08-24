import React from 'React';

class AddOptions extends React.Component {
  state = {
    err: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    const err = this.props.handleOption(option);

    this.setState(() => ({ err }));

    e.target.elements.option.value = '';
  };

  render() {
    return (
      <div>
        <div className="error">{this.state.err && <p>{this.state.err}</p>}</div>
        <form onSubmit={this.handleAddOption}>
          <div className="submit">
            <input className="input" type="text" name="option" />
            <button className="button__add">Add Option</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddOptions;
