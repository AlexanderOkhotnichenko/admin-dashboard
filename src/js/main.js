import '../index.html';
import { hoverNavigation } from './hoverNavigation';
import { toggleButtonNavigation } from './toggleButtonNavigation';
import { toggleSearch } from './toggleSearch';
import { chart } from "./chart";
import { countUp } from "./countUp";


import '../scss/root.scss';

document.addEventListener("DOMContentLoaded", () => {
  hoverNavigation();
  toggleButtonNavigation();
  toggleSearch();
  chart();
  countUp();
})