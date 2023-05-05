import { fetchData } from './fetch';

describe('Testing fetch', () => {

    test('Devuelve un objeto', async () => {

        const url = 'http://localhost:3000/auth/login';

        const method = 'POST';

        const body = {
            email: 'user@correo.com',
            password: '123456'
        };

        const response = await fetchData(url, method, body);

        expect(response).toStrictEqual(expect.any(Object));

    });

});