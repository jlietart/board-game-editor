import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm } from 'redux-form';
import FormField from '../form-field/FormField';

const CreateProjectForm = ({ handleSubmit }) =>
    <Form onSubmit={handleSubmit}>
      <Field
        name="title"
        label={'Nom du projet'}
        component={FormField}
        type={'text'}
      />
      <Field
        name="description"
        label={'Description du projet'}
        component={FormField}
        type={'text'}
      />
      <input type="submit" value="Créer" />
    </Form>;

CreateProjectForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'create-project'
})(CreateProjectForm);
