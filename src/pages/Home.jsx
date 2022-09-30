import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';


export class Home extends Component {
  render() {
    const { responseApi } = this.props;
    return (
      <div>
        <Header />
        {responseApi.map((e) => (
          <img key={ e.id } src={ e.url }/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  responseApi: state.cats.api,
});

export default connect(mapStateToProps)(Home);
