import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { nomeDoUsuario } = this.props;
    return (
      <header>
        <div>{ nomeDoUsuario }</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  nomeDoUsuario: state.user.name,
});

export default connect(mapStateToProps)(Header);
