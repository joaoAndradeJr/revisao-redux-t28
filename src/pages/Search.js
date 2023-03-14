import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { fetchArtistAlbum, resetAlbuns } from '../redux/actions';
import AlbumCard from '../components/AlbumCard';

class Search extends Component {
  state = {
    artist: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetAlbuns());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { dispatch } = this.props;
    const { artist } = this.state;
    dispatch(fetchArtistAlbum(artist));
  };

  render() {
    const { artist } = this.state;
    const { loading, albuns } = this.props;
    return (
      <>
        <Header />
        { loading
            ? <Loading />
            : (
              <form>
                <label htmlFor="input-artist">
                  Nome do Artista
                  <input
                    type="text"
                    onChange={ this.handleChange }
                    value={ artist }
                    name="artist"
                    id="input-artist"
                  />
                </label>
                <button
                  type="button"
                  disabled={ artist.length < 2 }
                  onClick={ this.handleClick }
                >
                  Buscar
                </button>
              </form>
            ) 
        }
        <section>
          { albuns.length > 0 &&
              albuns.map((e) => (
                <AlbumCard
                  key={ e.collectionId }
                  name={ e.artistName }
                  albumName={ e.collectionName }
                  img={ e.artworkUrl100 }
                  id={ e.collectionId }
                />
            ))
          }
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  albuns: state.artist.albuns,
});

export default connect(mapStateToProps)(Search);
