import {
  Button, CardContent, CardMedia, Dialog, Typography,
} from '@material-ui/core';
import React from 'react';

interface IProps {
    title: string;
    codeUrl: string;
    modalInfo: {
        imageUrl: string;
        description: string;
    }
    webAppInfo: {
        isWebApp: boolean;
        webAppURL?: string;
    }
    displayModal: boolean;
    handleModalClose(): void;
}

const ProjectModal: React.FC<IProps> = ({
  title, codeUrl, modalInfo, webAppInfo, displayModal, handleModalClose,
}) => (
  <Dialog
    open={displayModal}
    onClose={handleModalClose}
  >
    <CardMedia component="img" image={modalInfo.imageUrl} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {modalInfo.description}
      </Typography>
    </CardContent>
    {webAppInfo.isWebApp && (
      <Button size="small" color="primary" href={webAppInfo.webAppURL}>
        Open Application
      </Button>
    )}
    <Button size="small" color="primary" onClick={handleModalClose}>
      Close
    </Button>
    <Button size="small" color="primary" href={codeUrl}>
      View Code
    </Button>
  </Dialog>
);

export default ProjectModal;
