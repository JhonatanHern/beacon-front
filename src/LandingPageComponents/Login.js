import React , { Fragment } from 'react'

const Login = props => (
  <Fragment>
    <h2>
    	Log in to <span className="gray">BEACON</span>
    </h2>
    <form>
    	<input placeholder="Email"/>
    	<input placeholder="Password"/>
    	<input type="submit" value="Login"/>
    </form>
    <small className="gray login-text">
    	By continuing, you agree to our Terms of Service and Privacy Policy
    </small>
    <p>
    	Don't have an account? sign up instantly
    	<br/>
    	Forgot password?
    </p>
  </Fragment>
)

export default Login