import {
  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

interface IProps {
    title: string;
    codeUrl: string;
    modalInfo: {
        imageUrl: string;
        description: string;
    }
    cardInfo: {
        imageUrl: string;
        description: string;
    }
    webAppInfo: {
        isWebApp: boolean;
        webAppURL?: string;
    }
}

const ProjectCard: React.FC<IProps> = ({
  title, codeUrl, modalInfo, cardInfo, webAppInfo,
}) => {
  const [displayModal, setDisplayModal] = useState(false);

  const toggleModalDisplay = () => {
    setDisplayModal(!displayModal);
  };

  const handleModalClose = () => {
    setDisplayModal(false);
  };

  return (
    <>
      {displayModal && (
        <ProjectModal
          title={title}
          codeUrl={codeUrl}
          modalInfo={modalInfo}
          webAppInfo={webAppInfo}
          displayModal={displayModal}
          handleModalClose={handleModalClose}
        />
      )}
      <Card>
        <CardActionArea onClick={toggleModalDisplay}>
          <CardMedia component="img" image={cardInfo.imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {cardInfo.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {webAppInfo.isWebApp && (
            <Button size="small" color="primary" href={webAppInfo.webAppURL}>
              Open Application
            </Button>
          )}
          <Button size="small" color="primary" onClick={toggleModalDisplay}>
            See Details
          </Button>
          <Button size="small" color="primary" href={codeUrl}>
            View Code
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
