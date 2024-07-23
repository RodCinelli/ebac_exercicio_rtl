import { server } from './mocks/server';
import '@testing-library/jest-dom';

// Configurações para MSW
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
