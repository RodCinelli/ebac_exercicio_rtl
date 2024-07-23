import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir a inserção de dois comentários', () => {
        render(<Post />);
        
        // Simular a inserção do primeiro comentário
        fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Primeiro comentário' } });
        fireEvent.click(screen.getByTestId('add-comment-button'));

        // Verificar se o primeiro comentário foi adicionado
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        // Simular a inserção do segundo comentário
        fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Segundo comentário' } });
        fireEvent.click(screen.getByTestId('add-comment-button'));

        // Verificar se o segundo comentário foi adicionado
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
