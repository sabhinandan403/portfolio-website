import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from '../../app/page';
import '../../app/globals.css';
import { TechMapInteractions } from './tech-map-interactions';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio />
    <TechMapInteractions />
  </StrictMode>,
);
