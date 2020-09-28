import React from 'react';
import {
  Card, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import IWorkExperience from '../interfaces/IWorkExperience';

const StyledCard = styled(Card)`
  display: flex;
  direction: row;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  max-width: 500px;
  max-height: 500px;
`;

const WorkExperienceCard: React.FC<IWorkExperience> = ({
  imageUrl, company, jobTitle, location, dateRange, description,
}) => (
  <StyledCard>
    <CardMedia>
      <StyledImage src={imageUrl} />
    </CardMedia>
    <CardContent>
      <Typography variant="h4">
        {jobTitle}
      </Typography>
      <Typography variant="h5" color="textSecondary">
        {company}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {dateRange.startDate}
        {' '}
        -
        {' '}
        {dateRange.endDate}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {location}
      </Typography>
      {description}
    </CardContent>
  </StyledCard>
);

export default WorkExperienceCard;
