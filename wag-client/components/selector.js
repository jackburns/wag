import React from "react";
import Dropdown from "./dropdown";

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      showDropdown: false
    };
  }

  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSelect = (i, event) => {
    event.preventDefault();
    const selectedValue = this.props.values.filter(value => value.id === i)[0];
    this.setState({ input: selectedValue.name });
  };

  handleAdd = event => {
    event.preventDefault();
    const selectedValue = this.props.values.filter(
      value => value.name.toLowerCase() === this.state.input.toLowerCase()
    )[0];
    const inputToAdd = selectedValue || { id: null, name: this.state.input };
    this.props.onAdd(inputToAdd);
    this.setState({ input: "" });
  };

  // filters out blacklist items and if the current input is an item
  getAutoCompleteList = () => {
    const filtered = this.props.values.filter(
      value =>
        this.props.blacklistValues.indexOf(value.name) < 0 &&
        value.name.toLowerCase().indexOf(this.state.input.toLowerCase()) !== -1
    );

    const selected = filtered.filter(
      value => value.name.toLowerCase() === this.state.input.toLowerCase()
    );

    if (selected.length === 0) {
      return filtered;
    }
    return [];
  };

  render() {
    const autocompleteList = this.getAutoCompleteList();

    return (
      <div className="selector">
        <form className="pure-form pure-g">
          <div className="pure-u-3-4">
            <input
              type="text"
              className="pure-input-1"
              placeholder={this.props.placeholder || "Search..."}
              value={this.state.input}
              onChange={this.handleInputChange}
              onFocus={() =>
                this.setState({ ...this.state, showDropdown: true })}
              onBlur={() =>
                this.setState({ ...this.state, showDropdown: false })}
            />
          </div>
          <div className="pure-u-1-4">
            <button
              className="pure-button pure-button-primary"
              onClick={this.handleAdd}
            >
              Add
            </button>
          </div>
        </form>
        <Dropdown
          list={autocompleteList}
          handleSelect={this.handleSelect}
          show={this.state.showDropdown}
        />
        <style jsx>{`
          .selector {
          }
          .pureform {
          }
          button {
            padding: .5em 1em;
            margin-left: 1em;
          }
          input {
          }
        `}</style>
      </div>
    );
  }
}
