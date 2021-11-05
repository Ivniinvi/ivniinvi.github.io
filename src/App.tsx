import React from 'react';
import './App.css';

import Header from './Header';
import Content from './Content';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function App() {
  const date = new Date();

  const projects = ( //MATT: This is where you would put your projects
    <div id="content" className="horizontal">
      <Content
        title="Open Source Commits"
        description=""
        link="https://github.com/BeeStation/BeeStation-Hornet/pulls?q=is%3Amerged+is%3Apr+author%3AIvniinvi+"
        image="https://forums.beestation13.com/uploads/default/optimized/2X/3/3b0801025520d0a189d305372acefa5390e111c8_2_553x499.png"
      />
    </div>
  );

  return (
    <div className="App vertical">
      <Header isLink={false}>
        <div id="titleBar">
          <a href="https://github.com/Ivniinvi" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/matthew-headley-8066b61b8/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a>Resume</a>
        </div>
      </Header>

      {!projects ? <div id="emptyText">Projects go here!</div> : projects}

      <div id="footer">
        Matt Headley {date.getFullYear()}
      </div>
    </div>
  );
}

export default App;
