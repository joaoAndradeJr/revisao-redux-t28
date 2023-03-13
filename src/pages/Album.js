import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { fetchAlbum } from '../redux/actions';

class Album extends Component {

  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(fetchAlbum(id));
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        { loading
            ? <Loading />
            : (
              <h1>asdasd</h1>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
});

export default connect(mapStateToProps)(Album);
