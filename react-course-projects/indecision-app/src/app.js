import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



//Documents\Work\tutorial-work\react-course-projects\indecision-app
// this is the command to run Babel - babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// this is the command to run Live-server - yarn run serve
// this will initiate Webpack - yarn run build