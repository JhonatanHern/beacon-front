import React from 'react'

import Login from './Login'
import Signup from './Signup'

const Form = props => (
  <section id="landing-form-holder">
    {
      props.path==='login'?
      <Login/>
      :
      <Signup/>
    }
    <img alt="" src="/landingIcons/waves.svg"/>
  </section>
)

export default Form