import React, { Component } from 'react'
import { connect } from 'react-redux';
import trofee from '../images/pngegg.png';
import '../styles/Result.css'

export class Result extends Component {
  render() {
    const { cliques } = this.props;
    return (
      <div>
        <p>Miau! Você clicou { cliques } vezes no gatinho!</p>
        <img className="trofee"src={ trofee } alt="trofee"/>
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  cliques: state.cats.clicks,
})

export default connect(mapStateToProps)(Result);