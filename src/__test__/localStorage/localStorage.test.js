import { setLocal } from './localStorage';

describe('Testing setLocal', () => {

    test('Recibe los argumentos correctos', () => {

        const key = 'user';

        const value = {
            nombre: 'Andrés',
            role: 'admin'
        };

        const upload = setLocal(key, value);

        expect(upload).toBeTruthy();

    });

    test('No recibe alguno de los argumentos', () => {

        const upload = setLocal();

        expect(upload).toBe(undefined)

    });

});