import React , { Fragment } from 'react'

const Signup = props => (
  <Fragment>
    <h2>
    	SIGN UP FOR <span className="gray">BEACON</span>
    </h2>
    <small className="gray">
    	Already have an account? Log in instantly
    </small>
    <form>
    	<input placeholder="Full name"/>
    	<input placeholder="Email"/>
    	<input placeholder="Password"/>
    	<input type="submit" value="Sign up"/>
    	<small>
	    	By continuing, you agree to our Terms of Service and Privacy Policy
	    </small>
    </form>
  </Fragment>
)

export default Signup