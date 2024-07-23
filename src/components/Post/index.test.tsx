import { render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente Post', () => {
    it('Deve renderizar o componente corretamente com imagem e texto', () => {
        const childrenText = 'Olha só que legal minha miniatura do Batmóvel.';
        const imageUrl = 'https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg';

        render(<Post imageUrl={imageUrl}>{childrenText}</Post>);

        // Verificar se a imagem foi renderizada
        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveAttribute('src', imageUrl);
        expect(imgElement).toHaveAttribute('alt', '');

        // Verificar se o texto foi renderizado
        expect(screen.getByText(childrenText)).toBeInTheDocument();

        // Verificar se o componente PostComments foi renderizado
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});
