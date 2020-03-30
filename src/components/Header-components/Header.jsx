import React, { Component } from "react";
import { auth, logOut } from "../../stores/auth";
import { observer } from "mobx-react";
import { CSSTransition } from "react-transition-group";
import { toast } from "react-toastify";
import {
  HeaderContainer,
  HeaderButtonBox,
  LoginContainer,
  HeaderIcon,
  FrostedContainer
} from "../styles/Containers.style";
import { Button, PopupBox } from "../styles/UI.style";
import LoginForm from "../UI-components/LoginForm";
import RegisterForm from "../UI-components/RegisterForm";
import { DecorativePara, ParaText } from "../styles/text.style";
import { Link } from "@reach/router";

const Header = observer(
  class Header extends Component {
    state = {
      loginFormShown: false,
      registerFormShown: false
    };

    toggleLogin = () => {
      this.setState(currentState => {
        return {
          loginFormShown: !currentState.loginFormShown,
          registerFormShown: false
        };
      });
    };
    hideLogin = () => {
      this.setState({ loginFormShown: false });
    };
    toggleRegister = () => {
      this.setState(currentState => {
        return {
          registerFormShown: !currentState.registerFormShown,
          loginFormShown: false
        };
      });
    };
    hideRegister = () => {
      this.setState({ registerFormShown: false });
    };

    logOutUser = () => {
      logOut();
      toast.success("logged out sucessfully");
    };
    render() {
      return (
        <HeaderContainer>
          <HeaderIcon>
            <Link to="/">
              <DecorativePara color={"white"}>
                heroes of the realm
              </DecorativePara>
              <i className="fas fa-home fa-lg"></i>
            </Link>
          </HeaderIcon>
          <HeaderButtonBox>
            {auth.loggedIn && (
              <PopupBox>
                <ParaText color={"white"}>Hi, {auth.username}!</ParaText>
              </PopupBox>
            )}
            {auth.loggedIn ? (
              <Button onClick={this.logOutUser}>Log Out</Button>
            ) : (
              <Button onClick={this.toggleLogin}>Login</Button>
            )}

            <Button onClick={this.toggleRegister}>Register</Button>
          </HeaderButtonBox>
          <CSSTransition
            in={this.state.loginFormShown}
            timeout={500}
            classNames="loginTransitions"
            unmountOnExit
          >
            <LoginForm hideOnSucess={this.hideLogin} />
          </CSSTransition>
          <CSSTransition
            in={this.state.registerFormShown}
            timeout={500}
            classNames="loginTransitions"
            unmountOnExit
          >
            <RegisterForm hideOnSucess={this.hideRegister} />
          </CSSTransition>
        </HeaderContainer>
      );
    }
  }
);

export default Header;
