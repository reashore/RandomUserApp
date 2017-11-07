import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MemberList from "./Components/MemberList";
import registerServiceWorker from './registerServiceWorker';

let root = document.getElementById('root');
ReactDOM.render(<MemberList count="5" />, root);

registerServiceWorker();
