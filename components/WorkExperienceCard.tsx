import React from 'react';
import {
  Card, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import IWorkExperience from '../interfaces/IWorkExperience';

const StyledCard = styled(Card)`
  display: flex;
`;

const WorkExperienceCard: React.FC<IWorkExperience> = ({
  imageUrl, company, jobTitle, location, dateRange, description,
}) => (
  <StyledCard>
    <CardMedia component="img" image={imageUrl} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {company}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {dateRange.startDate.month}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {location}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {jobTitle}
      </Typography>
      {description}
    </CardContent>
  </StyledCard>
);

export default WorkExperienceCard;
