import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AlbumCard extends Component {
  render() {
    const { name, albumName, img, id } = this.props;
    return (
      <Link to={ `/album/${id} ` }>
        <h3>{ `Nome do artista: ${name} `}</h3>
        <h3>{ `Nome do album: ${albumName} `}</h3>
        <img src={img} alt={ `${name} album` } />
      </Link>
    )
  }
}

export default AlbumCard;
