import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, checkFavorite } from '../services/localStorage';

export default class Favorites extends Component {
  state = {
    favorites: getFavoriteSongs(),
  }

  handleFavorite = (music) => {
    this.setState({ favorites: checkFavorite(music) });
  }

  render() {
    const { favorites } = this.state;
    return (
      <>
        <Header />
        <section>
          { favorites.length === 0 && <h1>Sem músicas favoritas</h1>}
          { favorites.map((e) => (
            <MusicCard
              key={ e.trackId }
              music={ e }
              isFavorite
              checkFavorite={ () => this.handleFavorite(e) }
            />
          ))}
        </section>
      </>
    );
  }
}
