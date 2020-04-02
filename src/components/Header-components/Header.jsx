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
  FrostedContainer,
  NavMenu
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
      registerFormShown: false,
      navMenuShown: false
    };

    toggleLogin = () => {
      this.setState(currentState => {
        return {
          loginFormShown: !currentState.loginFormShown,
          registerFormShown: false,
          navMenuShown: false
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
          loginFormShown: false,
          navMenuShown: false
        };
      });
    };
    hideRegister = () => {
      this.setState({ registerFormShown: false });
    };

    toggleNavMenu = () => {
      this.setState(currentState => {
        return {
          navMenuShown: !currentState.navMenuShown,
          loginFormShown: false,
          registerFormShown: false
        };
      });
    };

    hideNavMenu = () => {
      this.setState({ navMenuShown: false });
    };

    logOutUser = () => {
      logOut();
      toast.success("logged out sucessfully");
    };
    render() {
      return (
        <HeaderContainer>
          <HeaderIcon navShowing={this.state.navMenuShown}>
            <button onClick={this.toggleNavMenu}>
              <DecorativePara color={"white"}>
                heroes of the realm
              </DecorativePara>
              <i className="fas fa-bars fa-lg"></i>
            </button>
            <NavMenu>
              <Link to="/" onClick={this.hideNavMenu}>
                <ParaText>Home</ParaText>
              </Link>
              <Link to="/adventurers" onClick={this.hideNavMenu}>
                <ParaText>Adventurer Rankings</ParaText>
              </Link>
              <Link to="/quests" onClick={this.hideNavMenu}>
                <ParaText>Quest Board</ParaText>
              </Link>
            </NavMenu>
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
              <Button onClick={this.toggleLogin}>Log in</Button>
            )}
            {!auth.loggedIn && (
              <Button onClick={this.toggleRegister}>Register</Button>
            )}
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
