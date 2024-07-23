import { setupWorker } from 'msw';
import { handlers } from './handlers';

// Configura o worker MSW com os handlers
jest.mock('msw', () => ({
    setupWorker: jest.fn(),
}));

describe('MSW Browser Worker', () => {
    it('Deve configurar o worker corretamente', () => {
        require('./browser');
        expect(setupWorker).toHaveBeenCalledWith(...handlers);
    });
});
