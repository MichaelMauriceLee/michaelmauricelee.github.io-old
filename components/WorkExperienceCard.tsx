import React from 'react';
import {
  Card, CardContent, Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import IWorkExperience from '../interfaces/IWorkExperience';

const StyledCard = styled(Card)`
  display: flex;
  direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

const StyledCardMedia = styled.div`
  display: flex;
  direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 300px;
`;

const WorkExperienceCard: React.FC<IWorkExperience> = ({
  imageUrl, company, jobTitle, location, dateRange, description, achievements,
}) => (
  <StyledCard>
    <StyledCardMedia>
      <StyledImage src={imageUrl} />
    </StyledCardMedia>
    <CardContent>
      <Typography variant="h4" component="h4">
        {jobTitle}
      </Typography>
      <Typography variant="h5" component="h5" color="textSecondary">
        {company}
      </Typography>
      <Typography variant="body2" component="div" color="textSecondary">
        {dateRange.startDate}
        {' '}
        -
        {' '}
        {dateRange.endDate}
      </Typography>
      <Typography variant="body2" component="div" color="textSecondary" gutterBottom>
        {location}
      </Typography>
      {description.map((sentence, index, arr) => (
        index !== arr.length - 1
          ? (
            <Typography variant="body2" component="div" key={sentence}>
              ◦
              {' '}
              {sentence}
            </Typography>
          )
          : (
            <Typography variant="body2" component="div" key={sentence} gutterBottom>
              ◦
              {' '}
              {sentence}
            </Typography>
          )
      ))}
      {achievements && (
      <Typography variant="h6" component="h6" gutterBottom>
        Notable Accomplishments
      </Typography>
      )}
      {achievements && achievements.map((sentence) => (
        <Typography variant="body2" component="div" key={sentence}>
          ‣
          {' '}
          {sentence}
        </Typography>
      ))}
    </CardContent>
  </StyledCard>
);

export default WorkExperienceCard;
