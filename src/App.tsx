import React from 'react';
import logo from './logo.svg';
import './App.css';
import useWindowSize from "@rooks/use-window-size"
import { useMediaQuery } from 'react-responsive'

import Content from './Content';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'


function App() {
  const date = new Date();

  const projects = ( //MATT: This is where you would put your projects
    <div id="content" className="horizontal">
      <Content
        title="Open Source Commits"
        description=""
        link="https://github.com/beestation"
        image="https://pbs.twimg.com/media/EzgKy7vWUAAiJ9j?format=png&name=small"
      />
    </div>
  );

  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <div className="App vertical">
      <div id="header" className={!isPortrait?"horizontal":"vertical"}>
        <div id="nameTitle">MATT HEADLEY</div>
        <div id="titleBar">
          <a href="https://github.com/Ivniinvi" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a>Resume</a>
        </div>
      </div>

      {!projects ? <div id="emptyText">Projects go here!</div> : projects}

      <div id="footer">
        Matt Headley {date.getFullYear()}
      </div>
    </div>
  );
}

export default App;
