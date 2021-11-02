/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import {
  Card, CardContent, TextField, Button, Typography, CardActions,
} from '@material-ui/core';
import { Color } from '@material-ui/lab';
import LinearProgress from '@material-ui/core/LinearProgress';
import CustomAlert from './CustomAlert';

interface IFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface IFormValueErrors {
  name: string | undefined;
  email: string | undefined;
  subject: string | undefined;
  message: string | undefined;
}

const StyledForm = styled(CardContent)`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const StyledTextField = styled(TextField)`
  && {
    padding-bottom: 0.5em;
  }
`;

const StyledAlert = styled(CustomAlert)`
  position: absolute;
`;

const Contact: React.FC = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [severity, setSeverity] = useState('success' as Color);
  const [message, setMessage] = useState('');

  const sendEmail = async (formValues: IFormValues) => {
    const result = await emailjs.send('portfolio', 'portfolio_form', formValues, 'user_gSfkba0Rf5gMdNzGxHLxj');
    return result;
  };

  const validateEmailAddress = (email: string) => {
    const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLowerCase());
  };

  const validate = (formValues: IFormValues) => {
    const errors = {} as IFormValueErrors;
    if (!formValues.name) {
      errors.name = 'Name is required';
    }
    if (!formValues.email) {
      errors.email = 'Email address is required';
    } else if (!validateEmailAddress(formValues.email)) {
      errors.email = 'Must be a valid email address';
    }
    if (!formValues.subject) {
      errors.subject = 'Subject is required';
    }
    if (!formValues.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  return (
    <>
      <StyledAlert
        severity={severity}
        message={message}
        displayAlert={displayAlert}
        setDisplayAlert={setDisplayAlert}
      />
      <Form
        onSubmit={sendEmail}
        validate={validate}
        render={({
          handleSubmit, form, pristine, invalid, submitting,
        }) => (
          <Card>
            <form onSubmit={async (event) => {
              try {
                await handleSubmit(event);
                setSeverity('success');
                setMessage('Email successfully sent!');
                // @ts-ignore
                form.restart();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } catch (err: any) {
                setSeverity('error');
                setMessage(err.text);
              } finally {
                setDisplayAlert(true);
                setTimeout(() => {
                  setDisplayAlert(false);
                }, 3000);
              }
            }}
            >
              {submitting && <LinearProgress />}
              <StyledForm>
                <Typography variant="h3" component="h3">
                  Contact
                </Typography>
                <Field
                  name="name"
                  render={({ input, meta }) => (
                    <StyledTextField
                      label="Name"
                      color="primary"
                      helperText={meta.touched ? meta.error : undefined}
                      error={meta.error && meta.touched}
                      {...input}
                    />
                  )}
                />
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <StyledTextField
                      label="Email"
                      color="primary"
                      helperText={meta.touched ? meta.error : undefined}
                      error={meta.error && meta.touched}
                      {...input}
                    />
                  )}
                />
                <Field
                  name="subject"
                  render={({ input, meta }) => (
                    <StyledTextField
                      label="Subject"
                      color="primary"
                      helperText={meta.touched ? meta.error : undefined}
                      error={meta.error && meta.touched}
                      {...input}
                    />
                  )}
                />
                <Field
                  name="message"
                  render={({ input, meta }) => (
                    <TextField
                      label="Message"
                      color="primary"
                      multiline
                      rows={20}
                      helperText={meta.touched ? meta.error : undefined}
                      error={meta.error && meta.touched}
                      {...input}
                    />
                  )}
                />
              </StyledForm>
              <CardActions>
                <Button type="submit" disabled={pristine || invalid || submitting}>Submit</Button>
              </CardActions>
            </form>
          </Card>
        )}
      />
    </>
  );
};

export default Contact;
