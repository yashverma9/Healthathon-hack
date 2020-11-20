// eslint-disable-next-line
import React, { Component } from "react";
import "../css/login.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class Login extends Component {
    nextPath(path) {
        this.props.history.push(path);
      }
  render() {
    return (
      <div className="parent-login">
        <TextField
          id="outlined-basic"
          label="Health Id"
          variant="outlined"
          className=" id-login"
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          className="password-login"
        />
        <Button variant="contained" color="primary" className="button-login-login" onClick={() => this.nextPath('/language')}>
          Login
        </Button>
      </div>
      //     <div className="form-parent-login">
      //             <div class="form">
      //     <form class="register-form">
      //       <input type="text" placeholder="name" />
      //       <input type="password" placeholder="password" />
      //       <input type="text" placeholder="email address" />
      //       <button>create</button>
      //       <p class="message">
      //         Already registered? <a href="#">Sign In</a>
      //       </p>
      //     </form>
      //     <form class="login-form">
      //       <input type="text" placeholder="username" />
      //       <input type="password" placeholder="password" />
      //       <button>login</button>
      //       <p class="message">
      //         Not registered? <a href="#">Create an account</a>
      //       </p>
      //     </form>
      //   </div>
      //     </div>
    );
  }
}

export default Login;
