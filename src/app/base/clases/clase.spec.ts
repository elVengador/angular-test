import Jugador from "./clase";

describe('Prueba de clases', () => {

    const jugador = new Jugador()

    //beforeAll
    beforeEach(()=>{
        jugador.hp = 100

    })
    //afterAll
    //afterEach

    it('debe de retornar 80 de hp si el jugador recibe 20 de danio', () => {
        const hp = jugador.recibirDanio(20)
        expect(hp).toBe(80);
    });

    it('debe de retornar 0 de hp si el jugador recibe 500 de danio', () => {
        const hp = jugador.recibirDanio(500)
        expect(hp).toBe(0);
    });
});
