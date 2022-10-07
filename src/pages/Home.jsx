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
  }
  
  handleBtn = () => {

  }

  render() {
    const { responseApi } = this.props;

    return (
      <div>
        <Header />
        {/* <p> { timer } </p>
        <p> { clicks }</p> */}
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



export default connect()(Home);
