/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import Head from 'next/head';
import { TextField, Button } from '@material-ui/core';
import { Color } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CustomAlert from '../components/CustomAlert';
import NavBar from '../components/NavBar';
import Link from '../components/Link';

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

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Verdana', 'san serif';
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: black;
`;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  width: 80%;
  margin: auto;
`;

const StyledMenuIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.5%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 100%;
  background-color: grey;
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
    <div className="container">
      <Head>
        <title>Contact | Michael Lee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <StyledApp>
          <NavBar />
          <StyledMenuIcon>
            <IconButton component={Link} href="/">
              <MenuIcon style={{ fill: 'white' }} />
            </IconButton>
          </StyledMenuIcon>
          <StyledPage>
            <CustomAlert
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
                <StyledForm onSubmit={async (event) => {
                  try {
                    await handleSubmit(event);
                    setSeverity('success');
                    setMessage('Email successfully sent!');
                    // @ts-ignore
                    form.restart();
                  } catch (err) {
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
                  {submitting && <CircularProgress />}
                  <Field
                    name="name"
                    render={({ input, meta }) => (
                      <TextField
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
                      <TextField
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
                      <TextField
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
                        rows={4}
                        helperText={meta.touched ? meta.error : undefined}
                        error={meta.error && meta.touched}
                        {...input}
                      />
                    )}
                  />
                  <Button type="submit" disabled={pristine || invalid || submitting}>Submit</Button>
                </StyledForm>
              )}
            />
          </StyledPage>
        </StyledApp>
      </main>
    </div>
  );
};

export default Contact;
