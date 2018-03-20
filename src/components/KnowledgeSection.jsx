import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import KnowledgeCharts from './KnowledgeCharts';

const KnowledgeSection = () => (
  <div className="knowledge">
    <Segment vertical textAlign="center" padded="very">
      <Header as="h1" icon textAlign="center">
        <Header.Content>
          <h1>Knowledge</h1>
        </Header.Content>
      </Header>
      <KnowledgeCharts />
    </Segment>
  </div>
);

export default KnowledgeSection;
