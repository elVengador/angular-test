import Jugador from "./jugador";

// testeamos si los eventos funcionan correctamente
describe('Prueba de clases', () => {

    let jugador:Jugador
    
    //beforeAll
    beforeEach(() => jugador = new Jugador())
    //afterAll
    //afterEach

    it('debe de emitir un evento cuando un jugador recibe danio y morir', () => {
        let nuevoHp = 0
        jugador.hpCambia.subscribe( hp => nuevoHp = hp)
        jugador.recibirDanio(1000)
        expect(nuevoHp).toBe(0);
    });
    it('debe de emitir un evento cuando un jugador recibe danio y sobrevivir', () => {
        let nuevoHp = 0
        jugador.hpCambia.subscribe( hp => nuevoHp = hp)
        jugador.recibirDanio(20)
        expect(nuevoHp).toBe(80);
    });
});
