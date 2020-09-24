/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Alert, Color } from '@material-ui/lab';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Snackbar } from '@material-ui/core';

interface IProps {
  severity: Color;
  message: string;
  setDisplayAlert: React.Dispatch<React.SetStateAction<boolean>>;
  displayAlert: boolean;
}

const CustomAlert: React.FC<IProps> = ({
  severity, message, displayAlert, setDisplayAlert,
}) => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setDisplayAlert(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={displayAlert}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionComponent={Slide}
    >
      <Alert
        severity={severity}
        action={(
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setDisplayAlert(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        )}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
