/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Alert, Color } from '@material-ui/lab';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface IProps {
  severity: Color;
  message: string;
  setDisplayAlert: React.Dispatch<React.SetStateAction<boolean>>;
  displayAlert: boolean;
}

const CustomAlert: React.FC<IProps> = ({
  severity, message, displayAlert, setDisplayAlert,
}) => (
  <Slide in={displayAlert}>
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
  </Slide>
);

export default CustomAlert;