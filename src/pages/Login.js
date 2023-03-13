import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="input-name">
          Nome
          <input
            type="text"
            onChange={ this.handleChange }
            value={ name }
            name="name"
            id="input-name"
          />
        </label>
        <button
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}
