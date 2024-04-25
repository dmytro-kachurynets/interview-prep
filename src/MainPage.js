import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListSubheader, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import FrontendRoadmap from "./FrontendRoadmap";

const MainPage = () => {
  const knowledgeAreas = [
    { id: 1, name: 'HTML', link: '/html' },
    { id: 2, name: 'CSS', link: '/css' },
    { id: 3, name: 'JavaScript', link: '/javascript' },
    { id: 4, name: 'Browser Platform', link: '/browser-platform' },
    { id: 5, name: 'Performance', link: '/performance' },
    { id: 6, name: 'Tools', link: '/tools' },
    { id: 7, name: 'Patterns & Algorithms', link: '/patterns-algorithms' },
    { id: 8, name: 'General Skills', link: '/general-skills' },
    { id: 9, name: 'Developer Qualities', link: '/developer-qualities' },
    { id: 10, name: 'English', link: '/english' },
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom gutterBottom sx={{ color: '#1976d2', marginTop: '40px' }}>
        Technical Interview Preparation
      </Typography>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div">Knowledge Areas</ListSubheader>
        }
      >
        {knowledgeAreas.map((area) => (
          <React.Fragment key={area.id}>
            <ListItem component={Link} to={area.link}>
              <ListItemText primary={area.name} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default MainPage;
