import React, { Component } from 'react';

export default class MusicCard extends Component {
  render() {
    const { music, isFavorite, checkFavorite } = this.props;
    return (
      <section>
        <h4>{ music.trackName }</h4>
        <audio src={ music.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento{" "} <code>audio</code>.
        </audio>
        <label htmlFor="is-favorite">
          Favorita
          <input
            type="checkbox"
            checked={ isFavorite }
            onChange={ () => checkFavorite(music) }
          />
        </label>
      </section>
    );
  }
}
