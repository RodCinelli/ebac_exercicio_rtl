// src/mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
    rest.get('https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.set('Content-Type', 'image/jpeg'),
            ctx.body(new ArrayBuffer(0)) // Simulação de corpo de imagem
        );
    }),
];
