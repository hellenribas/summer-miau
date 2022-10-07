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
      result: false,
    }

  cronometro = () => {
    this.setState({ timer: 10, clicks: 0 }, () => {
      const second = 1000;
      const idInterval = setInterval(() => {
        this.setState((prevState) => {
          return {
            result: false,
            timer: prevState.timer - 1,
          }
        }, () => {
          const  { timer } = this.state;
          if (timer === 0) {
            clearInterval(idInterval);
            this.setState({
              result: true,
            })
          }
        })
      }, second);
    })
  }

  componentDidMount = () => {
    const { pegaAPI } = this.props;
    pegaAPI();
    this.cronometro();
  }
  
  handleBtn = () => {
    const { clickGlobal } = this.props;
    this.setState((prev) => ({ clicks: prev.clicks + 1 }), () => {
      const { clicks } = this.state;
      clickGlobal(clicks)} )
  }

  render() {
    const { responseApi, getClickGlobal } = this.props;
    const { clicks, timer, result } = this.state;

    return (
      <div>
        <Header />
        {result ? <Result /> : (
          <>
        <p> { timer } </p>
        <p> { clicks }</p>
        <p> { getClickGlobal } </p>
        { (
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
          </>
)}
    <button onClick={this.cronometro}>Reiniciar</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  responseApi: state.cats.api,
  getClickGlobal: state.cats.clicks,
});

const mapDispatchToProps = (dispatch) => ({
  pegaAPI: () => dispatch(getRequest()),
  clickGlobal: (payload) => dispatch(getClicks(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
