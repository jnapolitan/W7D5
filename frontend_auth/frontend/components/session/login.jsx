import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('./chirps'));
    }

    render() {
        return <div className="session-form">
            <h2>Log In!</h2>
            <form>
              <label>
                Username:
                <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
              </label>
              <label>
                Password:
                <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
              </label>
              <button onClick={this.handleSubmit}>Log In</button>
              <Link to="/signup" className="form-link-text">or sign up</Link>
            </form>
          </div>;
    }
}