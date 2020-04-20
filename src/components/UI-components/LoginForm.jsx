import React, { Component } from "react";
import { loginRequest } from "../../api/auth.api";
import { LoginContainer } from "../styles/Containers.style";
import { Button, AuthForm } from "../styles/UI.style";
import { toast } from "react-toastify";
import { logOut } from "../../stores/auth";
import { formatErrorMessage } from "../../utils/formatting.utils";
import { navigate } from "@reach/router";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    loginRequest(this.state.username, this.state.password)
      .then(() => {
        toast.success("logged in!");
        this.props.hideOnSucess();
        navigate("/quests");
      })
      .catch((err) => {
        const errorMsg = formatErrorMessage(err);
        toast.error(`Error. ${errorMsg}`);
        logOut();
      });
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <LoginContainer>
        <AuthForm onSubmit={this.onSubmit}>
          <label>
            username:
            <input
              type="text"
              name="username"
              onChange={this.onChange}
              value={this.state.username}
              required
              autoFocus
            ></input>
          </label>
          <label>
            password:
            <input
              type="password"
              name="password"
              onChange={this.onChange}
              value={this.state.password}
              required
            ></input>
          </label>
          <Button>log in</Button>
        </AuthForm>
      </LoginContainer>
    );
  }
}

export default LoginForm;
