import React from 'react';
import Header from './Header';
import AddOptions from './AddOptions';
import Action from './Action';
import Option from './Option';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handleRemoveAll = () => {
    this.setState(() => ({
      options: []
    }));
  };

  handleRemove = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => ({ selectedOption: option }));
  };

  handleOption = option => {
    if (!option) {
      return 'Enter a valid input';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  render() {
    return (
      <div>
        <Header />
        <Action hasOptions={this.state.options.length === 0} handlePick={this.handlePick} />
        <Option options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemove={this.handleRemove} />
        <AddOptions handleOption={this.handleOption} options={this.state.options} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
