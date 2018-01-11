import React, { Component } from 'react';

class InputField extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }
  getValue = _ => this.state.value;

  render () {
    const { inputType, id } = this.props;

    return (
      <input type={inputType} id={id} value={this.state.value} onChange={this.handleChange} />
    );
  }
}

export default InputField;
