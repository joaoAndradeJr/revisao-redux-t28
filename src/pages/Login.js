import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUserName } from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { name } = this.state;
    dispatch(saveUserName(name));
    history.push('/search');
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
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default connect()(Login);