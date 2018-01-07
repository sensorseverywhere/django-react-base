import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

export const required = (value) => {
  if (!value) {
    return 'This field is required!';
  }
}

export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength8 = minLength(8);

class Register extends Component {

  handleFormValues = values => {
    this.props.registerUser(values);
  };

  renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
   }) => {
    return (
      <fieldset className="form-group">
        <label>
          {label}:
        </label>
        <input {...input} type={type} placeholder={label} className="form-control" />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </fieldset>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormValues)}>
        <Field
          name="username"
          component={this.renderField}
          label="Username"
          validate={required}
        />
        <Field
          name="email"
          component={this.renderField}
          label="Email"
          validate={required}
        />
        <Field
          name="password1"
          component={this.renderField}
          label="Password"
          validate={[required, minLength8]}
        />
        <Field
          name="password2"
          component={this.renderField}
          label="Confirm Password"
          validate={[required, minLength8]}
        />
        <button action="submit" className="btn btn-primary">Register</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'register',

})(connect( mapStateToProps, actions )(Register));
