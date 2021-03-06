import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Nav from './modules/Nav';

const baseURL = 'https://pokeapi.co/api/v2/';
const homeURL = `${baseURL}pokemon?offset=20&limit=48`;
const typeURL = `${baseURL}type`;
const abilityURL = `${baseURL}ability?offset=20&limit=48`;
Nav(baseURL, homeURL, typeURL, abilityURL);
