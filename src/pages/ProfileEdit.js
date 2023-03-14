import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { updateProfile } from '../redux/actions';

class ProfileEdit extends Component {
  state = {
    name: '',
    email: '',
    avatar: '',
    description: '',
    disableBtn: true,
  };

  componentDidMount() {
    const { profile } = this.props;
    this.setState({ ...profile, disableBtn: true });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const updatedProfile = { ...this.state };
    delete updatedProfile.disableBtn;
    dispatch(updateProfile(updatedProfile));
    history.push('/profile');
  };

  render() {
    const { name, email, avatar, description } = this.state;
    return (
      <>
        <Header />
        <form>
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
          <label htmlFor="input-email">
            Email
            <input
              type="email"
              onChange={ this.handleChange }
              value={ email }
              name="email"
              id="input-email"
            />
          </label>
          <label htmlFor="input-avatar">
            Avatar
            <input
              type="text"
              onChange={ this.handleChange }
              value={ avatar }
              name="avatar"
              id="input-avatar"
            />
          </label>
          <label htmlFor="input-description">
            Descrição
            <input
              type="text"
              onChange={ this.handleChange }
              value={ description }
              name="description"
              id="input-description"
            />
          </label>
          <button
            type="button"
            disabled={ name.length < 3 }
            onClick={ this.handleClick }
          >
            Salvar
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.user,
});

export default connect(mapStateToProps)(ProfileEdit);
