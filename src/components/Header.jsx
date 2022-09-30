import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>MIAU</h1>
        <p>{email}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
