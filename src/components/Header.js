import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { nomeDoUsuario } = this.props;
    return (
      <header>
        <div>{ `Usuário: ${nomeDoUsuario}` }</div>
        <nav>
          <Link to="/search">Pesquisar</Link>
          <Link to="/favorites">Favoritas</Link>
          <Link to="/profile">Perfil</Link>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  nomeDoUsuario: state.user.name,
});

export default connect(mapStateToProps)(Header);
