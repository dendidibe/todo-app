import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: ''
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.label) {
      this.props.onItemAdded(this.state.label);
      this.setState({
        label: ''
      });
    }
  };
  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };
  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control col-md-8 item-add-form__input"
          onChange={this.onLabelChange}
          placeholder="What need to be done?"
          value={this.state.label}
        />
        <button className="add-form-btn btn-outline-secondary btn col-md-4">
          Add item
        </button>
      </form>
    );
  }
}
