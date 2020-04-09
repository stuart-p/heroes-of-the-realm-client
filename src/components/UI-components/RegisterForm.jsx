import React, { Component } from "react";
import { registerRequest, loginRequest } from "../../api/auth.api";
import { LoginContainer } from "../styles/Containers.style";
import { Button, AuthForm, PopupBox } from "../styles/UI.style";
import { toast } from "react-toastify";
import { logOut } from "../../stores/auth";
import { formatErrorMessage } from "../../utils/formatting.utils";

class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
    usernameValidity: true,
    passwordValidity: true,
    usernamePopupText: "",
    passwordPopupText: "",
  };

  checkUsernameIsValid = (input) => {
    const spaceRegx = /[\s]/gi;
    const specialRegx = /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/gi;

    const spaceTest = spaceRegx.test(input);
    const specialTest = specialRegx.test(input);
    if (spaceTest || specialTest) {
      const popupText =
        (spaceTest ? "Spaces are not allowed. " : "") +
        (specialTest ? "Special characters not allowed." : "");
      this.setState({ usernameValidity: false, usernamePopupText: popupText });
      return false;
    } else {
      this.setState({ usernameValidity: true, usernamePopupText: "" });
      return true;
    }
  };

  checkPasswordIsValid = (input) => {
    const minLength = 4;
    const spaceRegx = /[\s]/gi;
    const lengthTest = input.length < minLength;
    const spaceTest = spaceRegx.test(input);

    if (lengthTest || spaceTest) {
      const popupText =
        (lengthTest ? "Minimum of 4 characters. " : "") +
        (spaceTest ? "Spaces are not allowed." : "");

      this.setState({ passwordValidity: false, passwordPopupText: popupText });
      return false;
    } else {
      this.setState({ passwordValidity: true, passwordPopupText: "" });
      return true;
    }
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      usernameValidity: true,
      passwordValidity: true,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const usernameValid = this.checkUsernameIsValid(this.state.username);
    const passwordValid = this.checkPasswordIsValid(this.state.password);
    usernameValid &&
      passwordValid &&
      registerRequest(this.state.username, this.state.password)
        .then((registeredUserDetails) => {
          toast.success("registered new account!");
          this.props.hideOnSucess();
          return registeredUserDetails;
        })
        .then(({ username, password }) => {
          loginRequest(username, password);
        })
        .catch((err) => {
          const errorMessage = formatErrorMessage(err);
          toast.error(`Error. ${errorMessage}`);
          logOut();
        });
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <>
        <LoginContainer>
          <AuthForm onSubmit={this.onSubmit} altBG>
            <label>
              username:
              <input
                type="text"
                name="username"
                onChange={this.onChange}
                value={this.state.username}
                required
              ></input>
            </label>
            <label>
              password:
              <input
                type="text"
                name="password"
                onChange={this.onChange}
                value={this.state.password}
                required
              ></input>
            </label>
            <Button altBG>Register</Button>
          </AuthForm>
          {!this.state.usernameValidity && (
            <PopupBox>
              <p>Invalid username. {this.state.usernamePopupText}</p>
            </PopupBox>
          )}
          {!this.state.passwordValidity && (
            <PopupBox>
              <p>Invalid password. {this.state.passwordPopupText}</p>
            </PopupBox>
          )}
        </LoginContainer>
      </>
    );
  }
}

export default RegisterForm;
