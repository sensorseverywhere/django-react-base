import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import createBrowserHistory from 'history/createBrowserHistory';
import * as actions from '../../actions';

const browserHistory = createBrowserHistory();

export const required = (value) => {
  if (!value) {
    return 'This field is required!';
  }
}

export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength8 = minLength(8);

class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  componentDidMount() {
    console.log('login')
  }

  handleFormValues(values) {
    this.props.loginUser(values);
    browserHistory.push('/dashboard/');
    return <Redirect to="/dashboard/" />;
  };

  renderField({
    input,
    label,
    type,
    meta: { touched, error, warning }
   }) {
    return (
      <div className="ui container">
        <div className="field">
          <label>
            {label}:
          </label>
          <input {...input} type={type} placeholder={label} />
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Sorry!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="ui main container form" onSubmit={handleSubmit(this.handleFormValues.bind(this))}>
        <Field
          name="username"
          component={this.renderField}
          label="Username"
          validate={required}
        />
        <Field
          name="password"
          component={this.renderField}
          label="Password"
          validate={required}
        />
        <button action="submit" className="ui button">Sign In</button>
        {this.renderAlert()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'login'
})(connect( mapStateToProps, actions )(Login));
