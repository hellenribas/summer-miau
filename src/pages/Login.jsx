import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getEmail, getRequest } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password:'',
    isBtnDisabled: true,
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({[name]: value}, () => this.verifyBtn() )
    
  }

  verifyBtn = () => {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const verifyEmail = regex.test(email) //true
    const verifyPassword = password.length > 6 //true
    const btnState = verifyEmail && verifyPassword //true
    this.setState({ isBtnDisabled: !(btnState) }) //false
  }

  handleBtn = (e) => {
    e.preventDefault()
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(getEmail(email)); //email - string (poderia mandar o estado todo se precisasse)
    dispatch(getRequest())
    history.push('/cats');
  }

  render() {
    const {isBtnDisabled} = this.state;
    return (
      <div>
        <form>
          <input
            type="text" 
            name="email"
            onChange={ this.handleInput }
          />
          <input
            type="password" 
            name="password"
            onChange={ this.handleInput }
          />
          <button
            type="submit"
            onClick={ this.handleBtn }
            disabled={ isBtnDisabled }
          >
            ENTRAR
          </button>
        </form>
      </div>
    )
  }
}


export default connect()(Login);