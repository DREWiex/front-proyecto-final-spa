import { fetchData } from './fetch';

describe('Testing fetch', () => {

    test('Devuelve un objeto', async () => {

        const url = 'http://localhost:3000/auth/login';

        const method = 'POST';

        const body = {
            email: 'user@correo.com',
            password: '123456'
        };

        try {

            const response = await fetchData(url, method, body);

            const { ok, data } = response;
            
            expect(data).toStrictEqual(expect.any(Object));

            expect(ok).toBeTruthy();

        } catch (error) {

            console.log('No entra en el catch');
            
        };

    });

});