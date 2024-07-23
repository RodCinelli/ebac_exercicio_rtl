import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { render, screen } from '@testing-library/react';
import Post from '../components/Post';

// Configura o servidor MSW com os handlers
const testServer = setupServer(...handlers);

// Configurações para MSW
beforeAll(() => testServer.listen());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());

describe('MSW Handlers', () => {
    it('Deve retornar a imagem corretamente', async () => {
        const childrenText = 'Olha só que legal minha miniatura do Batmóvel.';
        const imageUrl = 'https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg';

        render(<Post imageUrl={imageUrl}>{childrenText}</Post>);

        // Verificar se a imagem foi renderizada
        const imgElement = await screen.findByRole('img');
        expect(imgElement).toHaveAttribute('src', imageUrl);
        expect(imgElement).toHaveAttribute('alt', '');
    });

    it('Deve configurar handlers corretamente', () => {
        expect(handlers).toHaveLength(1);
        
        // Verificar a URL e método do handler
        const handler = handlers[0] as any;
        expect(handler.info.header).toBe('GET https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg');
        expect(handler.info.method).toBe('GET');
    });
});
