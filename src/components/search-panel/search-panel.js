import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };
  onSearchChange = e => {
    this.setState({
      term: e.target.value
    });
    this.props.onSearchChange(e.target.value);
  };
  render() {
    return (
      <input
        className="search-input"
        placeholder="search"
        type="text"
        onChange={this.onSearchChange}
        value={this.state.term}
      />
    );
  }
}
