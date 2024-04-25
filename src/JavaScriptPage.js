import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from './contentful';

const JavaScriptPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await client.getEntries({ content_type: 'techQuestion' });
        setQuestions(response.items);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const getCodeString = (codeField) => {
    if (codeField && codeField.content) {
      return codeField.content
        .map((block) => block.content.map((node) => node.value).join(''))
        .join('');
    }
    return '';
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        JavaScript Interview Questions
      </Typography>
      {questions.map((item) => (
        <Accordion key={item.sys.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{item.fields.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {documentToReactComponents(item.fields.answer)}
            {item.fields.code && (
              <SyntaxHighlighter language="javascript" style={tomorrow}>
                {getCodeString(item.fields.code)}
              </SyntaxHighlighter>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
      <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
        <Link to="/">Back to Main Page</Link>
      </Typography>
    </Container>
  );
};

export default JavaScriptPage;
