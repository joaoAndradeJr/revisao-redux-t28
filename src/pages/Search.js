import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { fetchArtistAlbum } from '../redux/actions';
import AlbumCard from '../components/AlbumCard';

class Search extends Component {
  state = {
    artist: '',
  };

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
                  onClick={ this.handleClick }
                >
                  Buscar
                </button>
              </form>
            ) 
        }
        <section>
          { albuns.length > 0 &&
              albuns.map((e, index) =>  index > 0 && (
                <AlbumCard
                  info={ e }
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
  albuns: state.user.albuns,
});

export default connect(mapStateToProps)(Search);
