import './index.css';
import './reset.css';

const body = document.querySelector('body');

const header = document.createElement('header');
header.classList.add('header');
header.textContent = '#TO-DO'
const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');

const mainContent = document.createElement('div');
mainContent.classList.add('mainContent');

body.append(header,sidebar,mainContent)


