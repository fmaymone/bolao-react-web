import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Checkbox from "material-ui/Checkbox";
import { grey500, white } from "material-ui/styles/colors";
import PersonAdd from "material-ui/svg-icons/social/person-add";
import Help from "material-ui/svg-icons/action/help";
import TextField from "material-ui/TextField";
import { Link } from "react-router";
import ThemeDefault from "../theme-default";
import firebase, { auth, provider } from "./auth/firebase";
const styles = {
  loginContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: "auto",
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    margin: "auto"
  },
  paper: {
    padding: 20,
    overflow: "auto"
  },
  buttonsDiv: {
    textAlign: "center",
    padding: 10
  },
  flatButton: {
    color: grey500
  },
  checkRemember: {
    style: {
      float: "left",
      maxWidth: 180,
      paddingTop: 5
    },
    labelStyle: {
      color: grey500
    },
    iconStyle: {
      color: grey500,
      borderColor: grey500,
      fill: grey500
    }
  },
  loginBtn: {
    float: "right"
  },
  btn: {
    background: "#4f81e9",
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: "#4f81e9"
  },
  btnGoogle: {
    background: "#e14441"
  },
  btnSpan: {
    marginLeft: 5
  }
};
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: [],
      user: [],
      logged: false
    };
    this.login = this.login.bind(this);
  }

  componentWillMount() {
    console.log(this.state);
  }

  login() {
    console.log("Vamos logar");
    console.log(this.state);
    console.log("Vamos logar");

    auth.signInWithPopup(provider).then(result => {
      console.log("Vamos logar - then");
      console.log(this.state);
      console.log("Vamos logar - then");
      const user = result.user;
      this.setState({
        user
      });
      this.setState({
        logged: true
      });
    });
  }

  isLogged() {
    return this.state.logged;
  }

  render() {
    let renderIt = null;

    if (!this.state.logged) {
      renderIt = (
        <div style={styles.loginContainer}>
          <Paper style={styles.paper}>
            <form>
              <TextField
                hintText="E-mail"
                floatingLabelText="E-mail"
                fullWidth={true}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth={true}
                type="password"
              />

              <div>
                <Checkbox
                  label="Remember me"
                  style={styles.checkRemember.style}
                  labelStyle={styles.checkRemember.labelStyle}
                  iconStyle={styles.checkRemember.iconStyle}
                />

                <Link to="/">
                  <RaisedButton
                    label="Login"
                    primary={true}
                    style={styles.loginBtn}
                  />
                </Link>
              </div>
            </form>
          </Paper>

          <div style={styles.buttonsDiv}>
            <FlatButton
              label="Register"
              href="/"
              style={styles.flatButton}
              icon={<PersonAdd />}
            />

            <FlatButton
              label="Forgot Password?"
              href="/"
              style={styles.flatButton}
              icon={<Help />}
            />
          </div>

          <div style={styles.buttonsDiv}>
            <Link to="/" style={{ ...styles.btn, ...styles.btnFacebook }}>
              <i className="fa fa-facebook fa-lg" />
              <span style={styles.btnSpan}>Log in with Facebook</span>
            </Link>

            <Link to="/login" style={{ ...styles.btn, ...styles.btnGoogle }}>
              <i className="fa fa-google-plus fa-lg" />
              <span style={styles.btnSpan} onClick={() => this.login()}>
                Log in with Google
              </span>
            </Link>
          </div>
        </div>
      );
    } else {
      renderIt = (
        <div style={styles.loginContainer}>
          <Paper style={styles.paper}> {this.state.user.displayName} </Paper>
        </div>
      );
    }
    console.log(this.state.logged);

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>{renderIt}</div>
      </MuiThemeProvider>
    );
  }
}

export default LoginPage;
