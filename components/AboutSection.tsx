import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const AboutSection: React.FC = () => (
  <Card>
    <CardContent>
      <Typography variant="h3">
        About Me
      </Typography>
      <Typography variant="body1">
        Master of Engineering in Software Engineering.
        Proficient in web development using Python, Java, JavaScript,
        C# as well as working with Microsoft Azure cloud services.
        Has previous work experience in the oil and gas industry as a
        Facilities Engineering Intern and as a Relief Field Operator.
      </Typography>
    </CardContent>
  </Card>
);

export default AboutSection;
