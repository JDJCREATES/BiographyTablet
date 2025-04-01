import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './theme.css'
import './index.css';
import App from './App.jsx';

/* After considering react-draggable vs rearct-DND, I went with dnd for more functionility including the ability to drag and drop elements into other elements, enabling home screen editing and possibly even a fake delete app feature with a trash can similar to windows systems */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </StrictMode>,
)
