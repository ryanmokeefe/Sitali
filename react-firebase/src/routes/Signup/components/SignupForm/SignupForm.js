import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import classes from './SignupForm.scss'

export const SignupForm = ({ handleSubmit }) => {
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div>
        <TextField floatingLabelText="Username" />
      </div>
      <div>
        <TextField hintText="someone@email.com" floatingLabelText="Email" />
      </div>
      <div>
        <TextField floatingLabelText="Password" type="password" />
      </div>
      <div className={classes.submit}>
        <RaisedButton
          label="Signup"
          primary
          type="submit"
          style={buttonStyle}
        />
      </div>
    </form>
  )
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default SignupForm
