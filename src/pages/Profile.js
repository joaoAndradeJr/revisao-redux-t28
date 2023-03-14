import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    const { profile: { name, email, avatar, description }, history } = this.props;
    return (
      <>
        <Header />
        <section>
          <img src={ avatar } alt={ `${name} avatar` } />
          <h3>Nome</h3>
          <p>{ name }</p>
          <h3>E-mail</h3>
          <p>{ email }</p>
          <h3>Descrição</h3>
          <p>{ description }</p>
          <button
            type="button"
            onClick={ () => history.push('/profile/edit') }
          >
            Editar perfil
          </button>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.user,
});

export default connect(mapStateToProps)(Profile);
