import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {username: '', password: '', errorMsg: 'Required'}

  onSubmitting = event => {
    event.preventDefault()

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>submitted successful</p>
        <button type="button">Submit Another Response</button>
      </div>
    )
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  renderErrorFirstName = () => {
    const {errorMsg, username} = this.state
    if (username.length < 1) {
      return username
    }
    return errorMsg
  }

  renderErrorLastName = () => {
    const {errorMsg, password} = this.state
    if (password.length < 1) {
      return password
    }
    return errorMsg
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username">FIRST NAME</label>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={this.renderUsername}
          placeholder="First name"
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password">LAST NAME</label>
        <br />
        <input
          type="text"
          id="password"
          value={password}
          onChange={this.renderPassword}
          placeholder="Last name"
        />
      </>
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Registration</h1>
        <form onSubmit={this.onSubmitting}>
          <div>
            {this.renderUsername()}
            {this.renderErrorFirstName()}
          </div>
          <div>
            {this.renderPassword()}
            {this.renderErrorLastName()}
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}
export default RegistrationForm
