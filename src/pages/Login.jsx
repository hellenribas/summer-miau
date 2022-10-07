import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getEmail, getRequest } from '../redux/actions';
import '../styles/Login.css'

class Login extends Component {
  state = {
    name:'',
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
    const { name } = this.state;
    dispatch(getEmail(name)); //email - string (poderia mandar o estado todo se precisasse)
    history.push('/cats');
  }

  render() {
    const {isBtnDisabled} = this.state;
    return (
      <div>
        <h1> Jogo dos cliques </h1>
        <h2> Você tem 10 segundos para clicar o máximo que puder no gatinho !!</h2>
        <form className="login-form">
          <input
            type="text" 
            name="name"
            placeholder="Nome"
            onChange={ this.handleInput }
          />
          <input
            type="text" 
            name="email"
            placeholder="Email"
            onChange={ this.handleInput }
          />
          <input
            type="password" 
            name="password"
            placeholder="Senha"
            onChange={ this.handleInput }
          />
          <button
            type="submit"
            onClick={ this.handleBtn }
            disabled={ isBtnDisabled }
          >
            JOGAR
          </button>
        </form>
      </div>
    )
  }
}


export default connect()(Login);