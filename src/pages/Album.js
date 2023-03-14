import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { fetchAlbum } from '../redux/actions';
import {
  checkFavorite, getFavoriteSongs, isFavoriteSong,
} from '../services/localStorage';

class Album extends Component {
  state = {
    favorites: getFavoriteSongs(),
  };

  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(fetchAlbum(id));
  }

  handleFavorite = (music) => {
    this.setState({ favorites: checkFavorite(music) });
  }

  if (loading) {
    return <Loading />;
  }

  render() {
    const { musics } = this.props;
    return (
      <div>
        <Header />
        { musics.length > 0 && (
          <section>
            <h1>{ musics[0].artistName }</h1>
            <h3>{ musics[0].collectionName }</h3>
            <img src={ musics[0].artworkUrl100 } alt={ `${musics[0].collectionName} album` } />
            {
              musics.map((e, index) => (
                index > 0 && (
                  <MusicCard
                    key={ e.trackId }
                    music={ e }
                    isFavorite={ isFavoriteSong(e.trackId) }
                    checkFavorite={ this.handleFavorite }
                  />
              )))
            }
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  musics: state.artist.musics,
});

export default connect(mapStateToProps)(Album);
