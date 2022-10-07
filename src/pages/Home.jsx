import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { getRequest, getClicks } from '../redux/actions';
import Result from '../components/Result';
import '../styles/Home.css';


export class Home extends Component {
    state= {
      clicks: 0,
      timer: 10,
    }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(getRequest())
    const second = 1000;
    setTimeout(() => {
      const timerUpdate = setInterval(() => {
        this.setState((prev) => {
          if (prev.timer === 1) {
          clearInterval(timerUpdate);  
          }
          return { timer: prev.timer -1 }
        })
      }, second)
    }, 2000)
  }
  
  handleBtn = () => {
    const { dispatch } = this.props;
    this.setState((prev) => ({clicks: prev.clicks + 1 }), () => {
      const { clicks } = this.state;
      dispatch(getClicks(clicks))})
  }

  render() {
    const { responseApi } = this.props;
    const { timer, clicks } = this.state;
    return (
      <div>
        <Header />
        <p> { timer } </p>
        <p> { clicks }</p>
        { timer === 0 ? <Result /> : (
          responseApi.length > 0 && (
          <button
            type="button"
            onClick= { this.handleBtn }
          >
            <img 
              key={ responseApi[0].id } 
              src={ responseApi[0].url } 
              alt="cat" 
              className="cat-img"
            />
          </button>
          ))
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  responseApi: state.cats.api,
});

export default connect(mapStateToProps)(Home);
