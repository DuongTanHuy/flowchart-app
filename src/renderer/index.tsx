import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <App />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>,
);

// calling IPC exposed from preload script
window?.electron?.ipcRenderer?.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window?.electron?.ipcRenderer?.sendMessage('ipc-example', ['ping']);
