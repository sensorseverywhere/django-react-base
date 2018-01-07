import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Login extends Component {

  handleFormValues = values => {
    this.props.loginUser(values);
  };

  renderInput = ({ label, ...field }) => {
    return (
      <fieldset className="form-group">
        <label>
          {label}:
        </label>
        <input {...field.input} type="text" className="form-control" />
      </fieldset>
    );
  }

  renderPassword = ({ label, ...field }) => {
    return (
      <fieldset className="form-group">
        <label>
          {label}:
        </label>
        <input {...field.input} type="password" className="form-control" />
      </fieldset>
    );
  }

  renderAlert = () => {
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
      <form onSubmit={handleSubmit(this.handleFormValues)}>
        <Field name="username" component={this.renderInput} label="Username" />
        <Field name="password" component={this.renderPassword} label="Password" />
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
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
