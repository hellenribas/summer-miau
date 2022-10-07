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
    const { pegaAPI } = this.props;
    pegaAPI();
  }
  
  handleBtn = () => {
    const { clickGlobal } = this.props;
    this.setState((prev) => ({ clicks: prev.clicks + 1 }), () => {
      const { clicks } = this.state;
      clickGlobal(clicks)} )
    
  }

  render() {
    const { responseApi, getClickGlobal } = this.props;
    const { clicks } = this.state;

    return (
      <div>
        <Header />
        {/* <p> { timer } </p> */}
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
