import React from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import carouselItems from '../data/carouselItems';

const StyledCardContent = styled.div`
  text-align: center;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
`;

const AboutSection: React.FC = () => (
  <Card>
    <CardContent>
      <Typography variant="h3" component="h3">
        About
      </Typography>
      <Typography variant="body1" component="div" paragraph>
        I am a recently graduated software engineer with a
        Master of Engineering degree in Software Engineering
        from the University of Calgary, proficient in
        full stack web development using React, Vue, Java,
        C# as well as using Microsoft Azure cloud services.
        I also have experience in DevOps using Terraform, Azure DevOps,
        and GitHub Actions.
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        I have always been fascinated with new and upcoming technology,
        and decided to switch from pursuing a career in the oil
        and gas industry to the tech industry.  I&apos;m passionate about
        coding and constantly honing my programming skills
        to stay up to date with current trends.
      </Typography>
      <Carousel animation="slide">
        {carouselItems.map((panel) => (
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="stretch"
          >
            {panel.panelItems.map((item) => (
              <Card style={{ border: 'none', boxShadow: 'none' }}>
                <CardMedia>
                  <StyledImage src={item.image} />
                </CardMedia>
                <CardContent>
                  <StyledCardContent>
                    <Typography variant="body2" component="div">
                      {item.name}
                    </Typography>
                  </StyledCardContent>
                </CardContent>
              </Card>
            ))}
          </Grid>
        ))}
      </Carousel>
    </CardContent>
  </Card>
);

export default AboutSection;
