import { SetupWorker, setupWorker } from 'msw';
import { SetupServer, setupServer } from 'msw/node';

import { handlers } from './handlers';

export const setupMSW = () => {
  if (typeof window === 'undefined') {
    (async () => {
      const server: SetupServer = setupServer(...handlers);

      server.listen();
    })();
  } else {
    (async () => {
      const worker: SetupWorker = setupWorker(...handlers);

      await worker.start();
    })();
  }
};
